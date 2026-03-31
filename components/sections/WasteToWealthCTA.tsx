"use client";

import { useState } from "react";
import { Recycle, CheckCircle2, Hammer, Package } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import FormField from "@/components/ui/FormField";

interface WasteToWealthFormValues { fullName: string; businessType: string; locationInGoma: string; contact: string; }
type FormStatus = "idle" | "submitting" | "success" | "error";
interface FormState { values: WasteToWealthFormValues; errors: Partial<Record<keyof WasteToWealthFormValues, string>>; status: FormStatus; }

export default function WasteToWealthCTA() {
  const { t } = useI18n();
  const [state, setState] = useState<FormState>({
    values: { fullName: "", businessType: "", locationInGoma: "", contact: "" },
    errors: {}, status: "idle",
  });

  function validate(v: WasteToWealthFormValues) {
    const e: Partial<Record<keyof WasteToWealthFormValues, string>> = {};
    if (!v.fullName.trim())       e.fullName       = "Full name is required.";
    if (!v.businessType.trim())   e.businessType   = "Business type is required.";
    if (!v.locationInGoma.trim()) e.locationInGoma = "Location in Goma is required.";
    if (!v.contact.trim())        e.contact        = "Contact is required.";
    return e;
  }

  function setField(field: keyof WasteToWealthFormValues, value: string) {
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
    <section id="partners" className="py-24 bg-slate-50" aria-label="Waste-to-Wealth Partnership">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div className="animate-fade-up">
            <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-3">For Artisans &amp; Entrepreneurs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight mb-5">{t("wastetoweath.title")}</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">{t("wastetoweath.subtitle")}</p>

            {/* Value prop card */}
            <div className="bg-water-teal/8 border border-water-teal/20 rounded-2xl p-6 flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-water-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Recycle size={20} className="text-water-teal" strokeWidth={1.8} />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{t("wastetoweath.body")}</p>
            </div>

            {/* Product types */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Package, label: "Pavers" },
                { icon: Hammer,  label: "Tools" },
                { icon: Recycle, label: "Fashion" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 text-center card-hover">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Icon size={17} className="text-water-teal" strokeWidth={1.8} />
                  </div>
                  <span className="text-gray-600 text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-up delay-200">
            {state.status === "success" ? (
              <div className="bg-teal-50 border border-teal-200 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-water-teal/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-water-teal" strokeWidth={1.6} />
                </div>
                <p className="text-teal-800 font-semibold text-lg">{t("wastetoweath.form.success")}</p>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-3xl p-8">
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <FormField id="wtw-fullName"       label={t("wastetoweath.form.name")}     type="text" value={state.values.fullName}       error={state.errors.fullName}       onChange={v => setField("fullName", v)}       required />
                  <FormField id="wtw-businessType"   label={t("wastetoweath.form.business")} type="text" value={state.values.businessType}   error={state.errors.businessType}   onChange={v => setField("businessType", v)}   required />
                  <FormField id="wtw-locationInGoma" label={t("wastetoweath.form.location")} type="text" value={state.values.locationInGoma} error={state.errors.locationInGoma} onChange={v => setField("locationInGoma", v)} required />
                  <FormField id="wtw-contact"        label={t("wastetoweath.form.contact")}  type="text" value={state.values.contact}        error={state.errors.contact}        onChange={v => setField("contact", v)}        required />
                  {state.status === "error" && <p role="alert" className="text-red-600 text-sm text-center">{t("wastetoweath.form.error")}</p>}
                  <button type="submit" disabled={state.status === "submitting"}
                    className="bg-water-teal hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-full text-base transition-all duration-200 min-h-[44px] mt-1 shadow-md hover:shadow-water-teal/30 hover:shadow-lg">
                    {state.status === "submitting" ? t("wastetoweath.form.submitting") : t("wastetoweath.form.submit")}
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
