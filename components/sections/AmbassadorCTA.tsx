"use client";

import { useState } from "react";
import { GraduationCap, CheckCircle2, User, School } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import FormField from "@/components/ui/FormField";

interface AmbassadorFormValues { fullName: string; schoolName: string; contact: string; }
type FormStatus = "idle" | "submitting" | "success" | "error";
interface FormState { values: AmbassadorFormValues; errors: Partial<Record<keyof AmbassadorFormValues, string>>; status: FormStatus; }

export default function AmbassadorCTA() {
  const { t } = useI18n();
  const [state, setState] = useState<FormState>({
    values: { fullName: "", schoolName: "", contact: "" },
    errors: {}, status: "idle",
  });

  function validate(v: AmbassadorFormValues) {
    const e: Partial<Record<keyof AmbassadorFormValues, string>> = {};
    if (!v.fullName.trim())   e.fullName   = "Full name is required.";
    if (!v.schoolName.trim()) e.schoolName = "School name is required.";
    if (!v.contact.trim())    e.contact    = "Phone or email is required.";
    return e;
  }

  function setField(field: keyof AmbassadorFormValues, value: string) {
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

  return (
    <section id="ambassadors" className="py-24 bg-white" aria-label="Join the Lake Ambassadors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div className="animate-fade-up">
            <p className="text-eco-green font-semibold text-xs uppercase tracking-[0.2em] mb-3">For Students</p>
            <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight mb-5">{t("ambassador.title")}</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">{t("ambassador.subtitle")}</p>

            {/* Stat card */}
            <div className="bg-eco-green/8 border border-eco-green/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-eco-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-eco-green" strokeWidth={1.8} />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">{t("ambassador.stat")}</p>
            </div>

            {/* Icon features */}
            <div className="mt-8 space-y-4">
              {[
                { icon: GraduationCap, text: "Lead conservation in your school" },
                { icon: User,          text: "Represent your community" },
                { icon: School,        text: "Compete in the Yearly Debate" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-lake-blue" strokeWidth={1.8} />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-up delay-200">
            {state.status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-eco-green/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-eco-green" strokeWidth={1.6} />
                </div>
                <p className="text-green-800 font-semibold text-lg">{t("ambassador.form.success")}</p>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <FormField id="amb-fullName"   label={t("ambassador.form.name")}    type="text" value={state.values.fullName}   error={state.errors.fullName}   onChange={v => setField("fullName", v)}   required />
                  <FormField id="amb-schoolName" label={t("ambassador.form.school")}  type="text" value={state.values.schoolName} error={state.errors.schoolName} onChange={v => setField("schoolName", v)} required />
                  <FormField id="amb-contact"    label={t("ambassador.form.contact")} type="text" value={state.values.contact}    error={state.errors.contact}    onChange={v => setField("contact", v)}    required />
                  {state.status === "error" && <p role="alert" className="text-red-600 text-sm text-center">{t("ambassador.form.error")}</p>}
                  <button type="submit" disabled={state.status === "submitting"}
                    className="bg-eco-green hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-full text-base transition-all duration-200 min-h-[44px] mt-1 shadow-md hover:shadow-eco-green/30 hover:shadow-lg">
                    {state.status === "submitting" ? t("ambassador.form.submitting") : t("ambassador.form.submit")}
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
