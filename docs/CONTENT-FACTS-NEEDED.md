# Facts needed from the client

Content on this site is written to be accurate and defensible. Where a specific
organizational fact could not be verified, the copy was written to avoid the
claim rather than invent one. This file lists what the client needs to supply,
and what was removed and why.

Nothing here blocks launch. But a behavioral health site is treated by Google as
YMYL ("Your Money or Your Life"), where unverifiable claims about credentials
and outcomes are a ranking and trust liability rather than a benefit. Filling
these in is the highest-value content work remaining.

---

## 1. Claims removed because they were fabricated

These were invented by the original Manus build. The client's live site states
none of them. They were carried into the rewrite and have now been removed.

| Claim | Was shown on | Status |
|---|---|---|
| "Founded in 2019" | About page story + timeline | **Removed.** No founding year is stated anywhere now. |
| "Compassionate Care Since 2019" | Home hero badge | **Removed**, replaced with "Compassionate, Confidential Care". |
| "500+ Families Helped" | Home stats card | **Removed**, replaced with "24hr Response Time" (consistent with the response commitment stated elsewhere on the site). |
| 2019-2025 milestone timeline (7 entries) | About page | **Removed entirely.** Every entry was invented, including the Salt Lake City expansion date. |
| "empowering individuals and families since 2019" | Home "Why Choose Us" | **Removed**, rewritten around the coordinated-programs model. |

**If the client can supply real versions of these, they should go back in.** A
genuine founding year and a real number of people served are strong trust
signals. Fabricated ones are a liability.

---

## 2. Facts to confirm or supply

### Organization
- [ ] **Actual founding year**
- [ ] **Legal status** — copy currently says "community-based supportive services
      organization". The old client site said "non-profit". If the entity is a
      registered 501(c)(3), say so explicitly and add the EIN; it is a
      meaningful trust and eligibility signal. Note the legal name in
      `site-data.ts` is an **LLC**, which does not match "non-profit". This
      needs resolving before publishing either claim.
- [ ] **Real service statistics** — clients served, years operating, program
      completion rates. Only use figures the client can substantiate.

### Credentials and compliance
Currently stated on the About page under "Standards of care" and repeated in
service FAQs. These are written generically and are believed accurate, but
should be confirmed:
- [ ] Staff hold **state licenses or work under licensed clinical supervision** — confirm
- [ ] **Background checks** performed on client-facing staff — confirm
- [ ] Operating as a **HIPAA-covered entity** — confirm
- [ ] Substance use records handled under **42 CFR Part 2** — confirm
- [ ] **Any accreditations** (CARF, Joint Commission, state licensure numbers). If
      these exist they are worth displaying prominently; they are among the
      strongest trust signals available to a provider.

### Insurance and payment
Stated repeatedly across service pages:
- [ ] "Most major insurance plans" accepted — confirm the actual list
- [ ] "Credentialed with Medicaid in the states we serve" — confirm which states
- [ ] **Sliding-scale fees available** — confirm this exists and how it is assessed
- [ ] Confirm the insurer logos in `INSURANCE_PROVIDERS` (`site-data.ts`) are
      accurate. Displaying an insurer the org is not actually contracted with is
      a real problem, not a cosmetic one.

### Services and coverage
- [ ] **Program availability by state.** Copy says availability varies by state
      and to contact for confirmation. A real matrix would be far better, and
      would open up genuine local SEO opportunity per state.
- [ ] **Men's halfway house** — confirm it is currently operating, its location,
      and its capacity. It is described in detail on the addiction recovery page.
- [ ] Confirm **no detox or emergency medical services** are provided. Service
      pages state this explicitly as a safety disclaimer; it must be correct.
- [ ] Confirm **ABA therapy is not provided directly** (stated in the autism FAQ).
- [ ] Confirm **no medication prescribing** (stated in mental health and wellness FAQs).

### Contact and locations
- [ ] Confirm both office addresses in `site-data.ts` are current and are places
      clients can actually attend.
- [ ] Confirm stated office hours (Mon-Fri 8am-6pm CT, Sat 9am-1pm CT). Note the
      offices are in **Nevada (PT)** and **Utah (MT)**, so advertising Central
      Time is likely wrong and should be checked.

### Testimonials
- [ ] The three testimonials in `site-data.ts` came from the Manus build and are
      **presumed fabricated**. Fake testimonials on a healthcare site are both a
      trust and a legal exposure. Either replace with real, consented client
      quotes (initials are fine, and standard practice) or remove the section.

---

## 3. Content that is safe as written

For clarity, the following is either publicly verifiable or written to be
generally true, and does not depend on client confirmation:

- The **IDEA / IEP process** and parent procedural safeguards (autism page).
  Federal law, publicly documented. The page states plainly that it is general
  information and not legal advice, and that state rules vary.
- **Levels of care** framing for addiction treatment (outpatient through
  residential). Standard clinical continuum.
- **988** Suicide & Crisis Lifeline and **211** community resource line. Public
  services, correctly described.
- **Medicaid / Medicare / Marketplace** comparison (wellness page). General and
  correct, with a stated caveat that rules vary by state and change.
- Withdrawal risk warnings for **alcohol and benzodiazepines**. Clinically
  accurate and important to state.
- The **11 states served** list. Taken from the client's own live site.
