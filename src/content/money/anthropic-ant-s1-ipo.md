---
title: '$ANT Files to Go Public: Inside Anthropic''s S-1, the $200B Compute Tab, and a $2T Question'
description: 'Anthropic''s S-1 dropped today. Revenue is up 1,300%, the headline loss is $80.7B (mostly accounting fiction), and the company has signed over $155B of non-cancelable compute contracts. A thorough breakdown of the numbers, the roadmap, the risks, and a rough reverse DCF on the reported $2T valuation.'
pubDate: 'Oct 26 2026'
---

Anthropic's Form S-1 hit the SEC's doorstep today, making $ANT the most anticipated AI listing of the year. I've been through the filing. This isn't a hype piece — it's a reality check: the headline numbers, the massive non-cancelable compute contracts that could be a runway or an anchor, the product roadmap that wants Claude everywhere, the geopolitical landmines, and a rough reverse DCF on that reported $2 trillion valuation. Buckle up.

## What Anthropic actually is

Anthropic builds Claude, a family of large language models positioned as the safe, steerable option for enterprise workloads. The company was founded by former OpenAI researchers who wanted a public-benefit spin on AI development (more on that governance quirk later).

Roughly 74% of revenue comes from API consumption — pay-as-you-go usage — with the rest from subscriptions to the Claude Platform and first-party apps. In the nine months through September 2026 alone, Anthropic shipped 250 new model versions, platform features, and applications. The mantra is enterprise-first: build tools big organizations can embed deeply, lock in, and scale across their entire knowledge-work stack.

## The numbers that melt your brain

- **Revenue, H1 2026:** $16.3B, up **1,300% YoY** (H1 2025: $1.2B). Not a typo.
- **Headline net loss:** $80.7B — of which **$72.4B is a non-cash fair-value adjustment** on convertible notes, derivatives, and SAFEs. As Anthropic's private valuation soared, accounting rules forced it to mark up what those notes are worth. That's paper, not cash out the door.
- **Operating loss:** just $693M in H1 2026 — down from $2.1B in H1 2025 and an $8.1B operating loss for FY2025. The operating losses are *shrinking* while revenue goes vertical.
- **Operating cash flow:** **+$3.9B** in H1 2026 (vs. -$1.5B a year earlier; -$2.6B for all of FY2025).
- **War chest:** $112.4B in cash plus $19.3B in short-term investments — $131.7B total — plus a $3.2B credit facility. Total capital raised to date: **$141.1B**.
- **Convertible notes payable:** $108.6B on the balance sheet (including Google's $20B note purchase with an option to buy up to $10B more in Class N stock, and Amazon's $15B note purchase agreement that unlocks in $5B milestone increments).
- **Deferred revenue:** $269M at the end of FY2024, $1.65B by June 30, 2026. Billings are pulling forward.

Read it again slowly: the "$80.7B loss" headline is mostly the accounting cost of success. The underlying business flipped cash-flow positive this year.

## The compute tab (aka the part that matters)

Here's my main takeaway from the whole filing. Anthropic has signed enormous **non-cancelable** compute commitments — contracts it must pay *regardless of actual usage*, cancellable only if the counterparty materially breaches and won't fix it:

- **Amazon:** at least **$110.0B**, spent between May 2026 and April 2036.
- **Microsoft:** at least **$44.9B**, between November 2026 and May 2033.
- **Google:** a long-term non-cancelable commitment with the dollar amount **redacted** in the public filing, plus committed TPU procurement for delivery in 2028-2031.

The aggregate committed-spend line in the public S-1 is blank (it's a preliminary prospectus), but press reports put the total north of $200B. Amazon and Microsoft alone account for a verified $154.9B.

Plain English: Anthropic has pre-ordered a decade of compute the way you'd pre-pay a mortgage — except the house is GPU clusters, and there's no refinancing. If revenue keeps compounding, this is a runway: guaranteed capacity at locked prices while rivals scramble for supply. If growth stalls, it's an anchor — billions due every year whether or not customers show up. Everything about this company only makes sense if revenue keeps growing violently. That's the bet.

## The product vision: Claude everywhere

Anthropic is betting the farm on turning Claude into the **operating system for knowledge work**:

- **MCP (Model Context Protocol)** as the universal integration layer — a plug-and-play socket letting any internal tool, CRM, or data warehouse talk to Claude without custom plumbing. If MCP becomes the standard, Anthropic owns the connective tissue of enterprise AI.
- **Agents that run for days, not minutes.** The roadmap is pushing Claude from a chatbot you prompt to an autonomous agent that holds context, chases data, and finishes multi-day software builds and analyses, checking in with humans only for oversight.
- **Stickiness is climbing.** In Q3 2026, over 50% of customers spending $100K+ annually used both the Claude Platform *and* at least one first-party app — up from ~30% a year earlier. Land with the API, expand into the apps.
- **Enterprise-first, consumer-later.** Governance tooling, data residency, access controls — the boring stuff that regulated industries actually pay for.

The vision is Claude woven into every workflow a company runs. Ambitious? Sure. But the consumption revenue model means every new use case directly feeds the top line.

## The job displacement section nobody wants to read

Credit where due: Anthropic put it in writing. The S-1 explicitly lists **job displacement and economic disruption** as litigation, regulatory, and perception risks, and warns that the company's own public statements about automation "may be used against us" in future lawsuits, regulatory proceedings, and public controversies. It flags the risk of customer backlash, employee backlash, and organized opposition.

The awkward truth: the business model *is* selling automation of entry-level knowledge work. Every dollar of that $16.3B in H1 revenue is a dollar some enterprise decided to spend on Claude instead of on people. Anthropic at least has the decency to be uncomfortable about it — the filing's risk factors read like a company that knows it's holding a loaded weapon. Whether that honesty becomes a moat (trust) or a liability (exhibit A in court) is genuinely unclear.

## Geopolitics, governance, and other fine print

The spiciest parts of any S-1 are always in the risk factors. This one doesn't disappoint:

- **China and chips:** Anthropic's stack leans on Taiwan-fabricated silicon and US-made GPUs. Tightening export controls restrict advanced chips to China, limit Anthropic's ability to serve mainland customers, and create a real bottleneck risk if Taiwan tensions flare. The filing also warns US-China AI competition could produce divergent regulation and reciprocal bans on US-origin models.
- **The Commerce Department incident:** in mid-2026, the US government imposed **worldwide export restrictions on Anthropic's Fable 5 and Mythos 5 models** — and Anthropic *disabled both models for all customers* until the restrictions were lifted after it updated its safeguards. Let that sink in: the government can flip a switch on Anthropic's best products.
- **The Department of War fight:** in early 2026, the DoW suggested it could invoke the **Defense Production Act** to compel Anthropic to strip usage limitations from its models. The Secretary of War designated Anthropic a **"supply-chain risk to national security"** and moved to bar military commercial activity with the company. Anthropic sued — *Anthropic PBC v. Department of War*, pending in the N.D. Cal. and D.C. Cir. Anthropic is simultaneously suing the Pentagon and trying to sell to the government. Bold strategy.
- **Governance:** Anthropic is a Public Benefit Corporation overseen by a **Long-Term Benefit Trust** that can elect and remove a majority of the board — making $ANT a "controlled company" under Nasdaq rules. Public shareholders get Class A stock with real economics but limited say; the Trust exists to prioritize AI safety over short-term returns. There are also Class E (employees), Class F (founders), and Class N (strategic investors like Google) shares. If you buy $ANT, you're along for the ride — you are not driving.

## Does an LLM have a moat?

The S-1 names exactly two competitors: **OpenAI and Google**. No Mistral, no open-source labs — Anthropic is telling investors the frontier model market is a three-way race, and only players with nine-figure compute budgets need apply.

But here's the tension: Anthropic's biggest suppliers are its biggest rivals. AWS, Google, and Microsoft provide the compute *and* compete for the same enterprise contracts. The filing explicitly warns compute supply could be "curtailed, repriced, or terminated" if hyperscalers prioritize their own models. Imagine Coca-Cola renting its bottling plants from Pepsi.

And then there's my nagging doubt: **does any model have a true moat?** Tools like OpenRouter let a developer swap Claude for GPT or Gemini with a few lines of code. Switching costs at the API layer are brutally low, and benchmarks leapfrog quarterly. Anthropic's counters: its safety reputation with regulated enterprises, the depth of MCP integrations, and the switching costs that build once Claude is wired into a company's data and workflows. My verdict: the moat isn't the model — it's the integration surface. Whether that's a 1-foot hurdle or a 7-foot hurdle with a flaming hoop, I genuinely don't know yet.

## The business model: pros and cons

**Pros:**
- Consumption pricing scales automatically as customers use more — no renegotiation needed to grow an account.
- Operating losses are collapsing toward breakeven even while spending aggressively; OCF is already positive.
- $131.7B war chest plus $141.1B raised means years of runway before public markets matter.
- Enterprise-first mix (usage + platform + apps) creates real lock-in once embedded.

**Cons:**
- Fixed, non-cancelable compute obligations against variable, demand-driven revenue — a brutal mismatch if growth wobbles.
- Suppliers are competitors; compute could be repriced or curtailed.
- Models commoditize fast; API prices have nowhere to go but down over time.
- The Trust controls the board, so public shareholders have no lever if priorities diverge.

## The rough reverse DCF (for fun)

Anthropic isn't profitable in any clean GAAP sense, so a DCF here is more vibe than science — but the discipline of running it is the point. Setup: the reported **$2T** valuation target, less $131.7B of cash and short-term investments for an implied ~$1.87T enterprise value. Base year: FY2026 revenue of roughly $36B (H1 actual of $16.3B, with H2 accelerating — Q3 is reportedly tracking near $16.8B *for the quarter*, though that figure is redacted in the public filing). Ten-year explicit period, 12% discount rate, 4% terminal growth, FCF margin ramping from ~2%:

| Scenario | 10-yr revenue path | FY36 FCF margin | Implied EV | vs. $2T target |
|---|---|---|---|---|
| **Stall** | 80% decaying to 12% | 12% | ~$222B | ~−88% |
| **Harsh bear** | 60% decaying to 10% | 15% | ~$594B | ~−68% |
| **Bear** | 100% decaying to 15% | 20% | ~$2.8T | ~+49% |
| **Bull** | 100% for 2 yrs, then 25% | 30% | ~$7.3T | ~+290% |
| **Market-implied** | **~42% every year** | 30% | ~$1.87T | — |

The takeaway: $2 trillion requires ~42% revenue growth *compounded for a decade* — reaching ~$1.19 trillion of revenue in FY36, 33x this year. Sounds insane, except H1 2026 grew 1,300%, and at a friendlier 9% discount rate the required CAGR drops to ~33%. Unlike most IPOs at nosebleed multiples, the math here is *conceivable*. What keeps me up isn't the multiple — it's the stall scenario: if growth hits a wall mid-decade while $155B+ of compute bills keep arriving, you're looking at −70% or worse. The fixed tab is what turns a growth scare into an existential event.

## Bottom line

Anthropic is a brilliant, enterprise-first AI company that has turned Claude into a credible operating system for knowledge work — with real cash flow, real customers diversifying fast, and a product shipping cadence that borders on absurd. But it's strapped to a $155B-plus non-cancelable compute anchor, buys its oxygen from its competitors, answers to a trust designed to prioritize humanity over shareholders, and is asking $2 trillion for the privilege.

For the Rookie portfolio, this is a watchlist name, not a buy. The story only works if the growth never blinks — and stories that require perfection tend to find out the hard way.

*NOT INVESTMENT ADVICE. THIS IS PURELY FOR ENTERTAINMENT AND MY OWN EDUCATION. DO YOUR OWN HOMEWORK. Figures are from Anthropic's Form S-1 as filed publicly on October 26, 2026 (several figures, including Q3 revenue and total committed compute spend, are redacted in the public filing and noted as such); the reverse DCF uses my own rough assumptions — adjust and stress-test them yourself.*
