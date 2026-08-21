import { useEffect, useRef, useState, type FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Loader2, X } from 'lucide-react';
import type { BookingConfig } from '../../types/portfolio';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
  booking: BookingConfig;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  slot?: string;
}

type SubmitStatus = 'idle' | 'sending';

/** Digits-only phone must be a plausible mobile number (10–13 digits). */
function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 13;
}

function formatDate(date: Date | null) {
  if (!date) return 'Not specified';
  return date.toLocaleDateString(undefined, { dateStyle: 'full' });
}

export function AppointmentModal({ open, onClose, booking }: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  // Lock body scroll and close on Escape while open; focus the first field.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const focusTimer = window.setTimeout(() => nameRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  if (!open) return null;

  function resetForm() {
    setName('');
    setPhone('');
    setDate(null);
    setSlot('');
    setMessage('');
    setErrors({});
    setSubmitError(false);
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!isValidPhone(phone)) next.phone = 'Enter a valid mobile number.';
    if (!date) next.date = 'Choose a preferred date.';
    if (!slot) next.slot = 'Pick a time slot.';
    return next;
  }

  /**
   * POSTs the appointment to the serverless relay, which emails it to the
   * clinic. Returns true on success. If no endpoint is configured yet (local
   * dev before the worker is deployed) we resolve optimistically with a warning.
   */
  async function deliver(): Promise<boolean> {
    if (!booking.relayEndpoint) {
      console.warn(
        'booking.relayEndpoint is not set — appointment was not delivered. ' +
          'Deploy server/appointment-worker and set the URL in portfolio.ts.',
      );
      return true;
    }
    const response = await fetch(booking.relayEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        date: formatDate(date),
        time: slot,
        message: message.trim(),
      }),
    });
    return response.ok;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(false);
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    let delivered = false;
    try {
      delivered = await deliver();
    } catch {
      delivered = false;
    }
    setStatus('idle');

    if (delivered) {
      resetForm();
      onClose();
    } else {
      // Keep the modal open so the patient can retry or call instead.
      setSubmitError(true);
    }
  }

  return (
    <div
      className="modalOverlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appt-modal-title"
      >
        <button className="modalClose" type="button" aria-label="Close" onClick={onClose}>
          <X />
        </button>

        <div className="modalHead">
          <span className="modalHeadIcon" aria-hidden="true">
            <CalendarDays />
          </span>
          <div>
            <h3 id="appt-modal-title">Book an appointment</h3>
            <p>Share your details and the clinic will confirm your slot.</p>
          </div>
        </div>

        <form className="apptForm" onSubmit={handleSubmit} noValidate>
          <div className="apptField">
            <label htmlFor="appt-name">Full name</label>
            <input
              id="appt-name"
              ref={nameRef}
              type="text"
              autoComplete="name"
              placeholder="e.g. Ravi Kumar"
              value={name}
              aria-invalid={Boolean(errors.name)}
              onChange={(event) => setName(event.target.value)}
            />
            {errors.name ? <span className="apptError">{errors.name}</span> : null}
          </div>

          <div className="apptField">
            <label htmlFor="appt-phone">Phone number</label>
            <input
              id="appt-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              value={phone}
              aria-invalid={Boolean(errors.phone)}
              onChange={(event) => setPhone(event.target.value)}
            />
            {errors.phone ? <span className="apptError">{errors.phone}</span> : null}
          </div>

          <div className="apptField">
            <label htmlFor="appt-date">Preferred date</label>
            <DatePicker
              id="appt-date"
              selected={date}
              onChange={(value: Date | null) => setDate(value)}
              minDate={new Date()}
              dateFormat="EEE, dd MMM yyyy"
              placeholderText="Select a date"
              withPortal
              showPopperArrow={false}
              wrapperClassName="apptDatePicker"
            />
            {errors.date ? <span className="apptError">{errors.date}</span> : null}
          </div>

          <div className="apptField">
            <span className="apptFieldLabel">Preferred time</span>
            <div className="slotGrid" role="group" aria-label="Time slots">
              {booking.timeSlots.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`slotBtn${slot === option ? ' selected' : ''}`}
                  aria-pressed={slot === option}
                  onClick={() => setSlot(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.slot ? <span className="apptError">{errors.slot}</span> : null}
          </div>

          <div className="apptField">
            <label htmlFor="appt-message">Message (optional)</label>
            <textarea
              id="appt-message"
              rows={3}
              placeholder="Symptoms, reason for visit, or a preferred doctor…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          {submitError ? (
            <p className="apptSubmitError" role="alert">
              Sorry, we couldn&apos;t send your request. Please try again or call the clinic.
            </p>
          ) : null}

          <button type="submit" className="btnBook" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>
                <Loader2 className="spin" />
                Sending…
              </>
            ) : (
              'Confirm request'
            )}
          </button>
          <p className="apptNote">Appointments are confirmed manually by the clinic team.</p>
        </form>
      </div>
    </div>
  );
}
