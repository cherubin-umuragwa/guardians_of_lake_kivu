"use client";

import { useState } from "react";
import { HeartHandshake, CheckCircle2, Trophy, Bus, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import FormField from "@/components/ui/FormField";

interface SponsorFormValues { organizationName: string; contactPersonName: string; email: string; message: string; }
type FormStatus = "idle" | "submitting" | "success" | "error";
interface FormState { values: SponsorFormValues; errors: Partial<Record<keyof SponsorFormValues, string>>; status: FormStatus; }

export default function SponsorCTA() {
  const { t } = useI18n();
  const [state, setState] = useState<FormState>({
    values: { organizationName: "", contactPersonName: "", email: "", message: "" },
    errors: {}, status: "idle",
  });

  function validate(v: SponsorFormValues) {
    const e: Partial<Record<keyof SponsorFormValues, string>> = {};
    if (!v.organizationName.trim())  e.organizationName  = "Organization name is required.";
    if (!v.contactPersonName.trim()) e.contactPersonName = "Contact person name is required.";
    if (!v.email.trim())             e.email             = "Email is required.";
    if (!v.message.trim())           e.message           = "Message is required.";
    return e;
  }

  function setField(field: keyof SponsorFormValues, value: string) {
    setState(p => ({ ...p, values: { ...p.values, [field]: value }, errors: { ...p.errors, [field]: undefined } }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate(state.values);
    if (Object.keys(errors).length > 0) { setState(p => ({ ...p, errors })); return; }
    setState(p => ({ ...p, status: "submitting", errors: {} }));
    try {
      await new Promise(res => setTimeout(res, 800));
      setState(p => ({ ...p, status: "success" }));
    } catch { setState(p => ({ ...p, status: "error" })); }
  }

  const fundingItems = [
    { icon: Trophy, label: "Yearly Debate Competition" },
    { icon: Star,   label: "Motivation Incentives" },
    { icon: Bus,    label: "Transport Coverage" },
  ];

  return (
    <section id="sponsors" className="py-24 bg-white" aria-label="Support the Guardians">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div className="animate-fade-up">
            <p className="text-lake-blue font-semibold text-xs uppercase tracking-[0.2em] mb-3">For Sponsors &amp; NGOs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight mb-5">{t("sponsor.title")}</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">{t("sponsor.subtitle")}</p>

            {/* Funding description */}
            <div className="bg-lake-blue/6 border border-lake-blue/15 rounded-2xl p-6 flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-lake-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HeartHandshake size={20} className="text-lake-blue" strokeWidth={1.8} />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{t("sponsor.body")}</p>
            </div>

            {/* Funding targets */}
            <div className="space-y-3">
              {fundingItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-lake-blue/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-lake-blue" strokeWidth={1.8} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-up delay-200">
            {state.status === "success" ? (
              <div className="bg-blue-50 border border-blue-200 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-lake-blue/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-lake-blue" strokeWidth={1.6} />
                </div>
                <p className="text-lake-blue font-semibold text-lg">{t("sponsor.form.success")}</p>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <FormField id="sp-org"     label={t("sponsor.form.org")}     type="text"     value={state.values.organizationName}  error={state.errors.organizationName}  onChange={v => setField("organizationName", v)}  required />
                  <FormField id="sp-contact" label={t("sponsor.form.contact")} type="text"     value={state.values.contactPersonName} error={state.errors.contactPersonName} onChange={v => setField("contactPersonName", v)} required />
                  <FormField id="sp-email"   label={t("sponsor.form.email")}   type="email"    value={state.values.email}             error={state.errors.email}             onChange={v => setField("email", v)}             required />
                  <FormField id="sp-message" label={t("sponsor.form.message")} type="textarea" value={state.values.message}           error={state.errors.message}           onChange={v => setField("message", v)}           required />
                  {state.status === "error" && <p role="alert" className="text-red-600 text-sm text-center">{t("sponsor.form.error")}</p>}
                  <button type="submit" disabled={state.status === "submitting"}
                    className="bg-lake-blue hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-full text-base transition-all duration-200 min-h-[44px] mt-1 shadow-md hover:shadow-lake-blue/30 hover:shadow-lg">
                    {state.status === "submitting" ? t("sponsor.form.submitting") : t("sponsor.form.submit")}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
