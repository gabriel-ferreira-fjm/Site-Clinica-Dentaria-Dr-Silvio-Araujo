import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Mail, Phone, Stethoscope, UserCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Appointment = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    date: '',
    time: '',
    dentist: '',
  });

  const consultationTypes = [
    { value: 'general', label: t('appointment.consultationTypes.general') },
    { value: 'cleaning', label: t('appointment.consultationTypes.cleaning') },
    { value: 'orthodontics', label: t('appointment.consultationTypes.orthodontics') },
    { value: 'implants', label: t('appointment.consultationTypes.implants') },
    { value: 'whitening', label: t('appointment.consultationTypes.whitening') },
    { value: 'emergency', label: t('appointment.consultationTypes.emergency') },
    { value: 'other', label: t('appointment.consultationTypes.other') },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('appointment.toast.title'),
      description: t('appointment.toast.description'),
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      consultationType: '',
      date: '',
      time: '',
      dentist: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="marcacao" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                {t('appointment.tag')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('appointment.title')}{' '}
                <span className="text-primary">{t('appointment.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('appointment.description')}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: Clock, text: t('appointment.benefits.response') },
                { icon: Calendar, text: t('appointment.benefits.flexible') },
                { icon: User, text: t('appointment.benefits.personalized') },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading font-semibold text-xl mb-4">
                {t('appointment.directContact.title')}
              </h3>
              <div className="space-y-3">
                <a href="tel:924123784" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5" />
                  <span>{t('appointment.directContact.phone')}</span>
                </a>
                <a href="mailto:geral@silvioaraujo.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5" />
                  <span>{t('appointment.directContact.email')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-background rounded-3xl shadow-dental-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {t('appointment.form.fullName')}
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('appointment.form.fullNamePlaceholder')}
                  required
                  className="h-12"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {t('appointment.form.email')}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('appointment.form.emailPlaceholder')}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    {t('appointment.form.phone')}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('appointment.form.phonePlaceholder')}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  {t('appointment.form.consultationType')}
                </label>
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">{t('appointment.form.consultationTypePlaceholder')}</option>
                  {consultationTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {t('appointment.form.preferredDate')}
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {t('appointment.form.preferredTime')}
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">{t('appointment.form.preferredTimePlaceholder')}</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dentist */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-primary" />
                  {t('appointment.form.preferredDentist')}
                </label>
                <select
                  name="dentist"
                  value={formData.dentist}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">{t('appointment.form.noPreference')}</option>
                  <option value="dr-silvio">Dr. Sílvio Araújo</option>
                </select>
              </div>

              {/* Submit */}
              <Button type="submit" variant="cta" size="xl" className="w-full">
                {t('appointment.form.submit')}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                {t('appointment.form.privacyNote')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
