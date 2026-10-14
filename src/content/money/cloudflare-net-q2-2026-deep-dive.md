---
title: 'Cloudflare (NET) Q2 2026 Deep Dive: Record Growth, a 20% Cut, and the Agentic Internet Bet'
description: 'Cloudflare grew revenue 36% in Q2 2026 while cutting 20% of its workforce to fund an AI-first pivot. A look at the numbers, the product stack for the agentic Internet, and what the stock price already assumes.'
pubDate: 'Oct 14 2026'
---

Cloudflare's Q2 2026 results, reported on August 6, tell two stories at once. Revenue jumped 36% year-over-year to $696.1 million, free cash flow surged 69% to $56.4 million, and the company added paying customers at a record pace. At the same time, Cloudflare booked a $150.7 million restructuring charge tied to "the Plan" — a shift to what it calls an agentic AI-first operating model that cuts roughly 20% of its workforce.

Record growth and a sweeping restructuring in the same quarter. This post digs into the numbers, the technology Cloudflare is actually shipping for the "agentic Internet," and — via a reverse DCF — what the $128 billion market cap already assumes will go right.

## What Cloudflare does

Cloudflare operates a global network that sits between users and the Internet properties they visit — north of 20% of the Internet already routes through it. On top of that network it sells security and performance services (Application Services), corporate network and Zero Trust products, and a developer platform — Workers — for running code on its infrastructure. The pitch is consolidation: replace a stack of legacy point solutions with one unified "connectivity cloud," priced largely on subscriptions rather than bandwidth.

## Q2 2026 by the numbers

- **Revenue:** $696.1M, +36% YoY (Q2 2025: $512.3M). H1 2026 revenue was $1,335.8M.
- **Margins:** non-GAAP gross margin of 73.1% — down 320bps YoY but up 30bps sequentially, the first sequential improvement in eight quarters. GAAP gross margin was 71.8%.
- **Profitability:** non-GAAP operating income of $96.1M (13.8% margin). GAAP operating loss of $205.7M, driven by the $150.7M restructuring charge. Non-GAAP EPS of $0.29; GAAP net loss of $170.0M (-$0.48/share).
- **Cash:** operating cash flow of $117.6M; free cash flow of $56.4M (8% margin), up 69% YoY. Cash and available-for-sale securities of $4.16B against ~$3.27B of convertible notes.
- **Bookings:** remaining performance obligations of $2.732B, +38% YoY; current RPO (64% of the total) grew 35%.
- **Customers:** 4,698 large customers (>$100K/year), +27% YoY, with a record 986 large-customer net adds over the trailing twelve months. Large customers now produce 73% of revenue, up from 71%. Over 80,000 paying customers were added in the quarter alone (+74% YoY paying-customer growth) — as many in one quarter as Cloudflare had in total at its 2019 IPO.
- **Retention:** dollar-based net retention of 120%, up 2 points sequentially and 6 points YoY.
- **Geography:** US 51% of revenue (+41% YoY), EMEA 27% (+30%), APAC 14% (+32%).
- **Guidance:** Q3 revenue of $736–737M (+31% YoY) with non-GAAP EPS of $0.34; full-year 2026 revenue of $2.864–2.870B (+32%) with non-GAAP EPS of $1.25–1.26.

## The product stack for the agentic Internet

The strategic claim from the Q2 call: for the first time, more than 50% of the traffic crossing Cloudflare's network was non-human — AI agents and bots rather than people browsing. Management's bet is that the web is being rewritten for machine-to-machine traffic, and that this rewrite needs a new kind of cloud. The technical case rests on a few pillars worth understanding.

**Isolates, not containers.** CEO Matthew Prince's argument: if every knowledge worker on Earth ran an agent inside a container, the planet wouldn't have enough CPU to power it — containers are too heavy for agent-scale concurrency. Cloudflare's answer is its V8 isolate-based sandboxing, which is dramatically lighter than containers and lets agents spin up ephemeral, low-cost execution environments, billed only while actually doing work. Agents don't just need inference, Prince argues — they need ephemeral places to create code, run inference, access the network, and store state, orchestrated globally. His framing: "the network is the computer" (a Sun Microsystems trademark Cloudflare now owns after Oracle let the registration lapse).

**Primitives developers are already standardizing on.** The customer wins show the architecture in production. A rapidly growing APAC technology company signed a $4M pool-of-funds contract for Workers — on top of an $8.7M Application Services deal the prior quarter — and now directs every request through a Cloudflare Worker, using KV and Durable Objects as the routing and tenant-configuration layer for its entire platform. A generative AI company signed a $7.5M pool-of-funds deal explicitly to escape hyperscaler egress fees: at their image and video volumes, egress charges "would break the economics" and lock in their choice of inference tools and GPUs. A $6M deal went to a company that needed elastic, secure container infrastructure for new AI agent capabilities, citing Cloudflare's built-in threat intelligence and FedRAMP compliance. Note the pattern: flexible pool-of-funds structures, Workers attached to traditional security contracts, and zero egress as the wedge against hyperscalers.

**The monetization layer — and its absurd scale problem.** During "Agents Week," Cloudflare unveiled the building blocks of a two-sided agentic marketplace: a Monetization gateway (sell any resource behind Cloudflare — a web page, API, dataset, or MCP tool), Wallets (so buyers' agents can pay autonomously), and cloudflare.pay (agent identity and trust for merchants). Prince's rough math on why this is hard: Cloudflare handles on the order of 0.5 billion requests per second; if 1–10% of those become monetizable micro-transactions at fractions of a penny each, the system must clear 10–100 million financial transactions per second. Visa, the largest payments network in the world, peaks around 20,000 per second — three orders of magnitude less. Whoever builds this has to out-scale Visa by a factor of a thousand. Cloudflare's distribution advantage: with over 20% of the Internet already behind its network, enabling this is closer to one click than a migration. More than 80% of major AI companies are already Cloudflare customers, and the company is running a research pilot with OpenAI on a sustainable content-creator ecosystem.

**Deliberately not joining the GPU arms race.** Asked why Cloudflare isn't signing massive AI infrastructure deals like the hyperscalers and neoclouds, Prince was blunt: "not all revenue is created equal." Lending your balance sheet so an AI company can rent commodity servers is, in his view, bad business. Cloudflare's angle is utilization — he claims the company can extract on the order of 10x the workload per capex dollar compared with typical hyperscaler GPU utilization, because Cloudflare schedules diverse customer traffic across its own boxes rather than handing customers a raw server. Hyperscalers lease you a server and hope for five turns of revenue; Cloudflare sells "work getting done." Network capex was just 7% of revenue in Q2 (guided to 14–15% for FY2026) — a fraction of what GPU-heavy peers are spending.

**Is it working?** Cloudflare doesn't break out Workers revenue, but management said the platform has "tipped" from playing for adoption to being a meaningful revenue contributor, that pool-of-funds deals are increasingly signed because developers demand Workers access, and that average contract sizes keep ticking up.

## The 20% workforce cut

On May 7, 2026, Cloudflare announced the Plan, designed to "accelerate its evolution to an agentic AI-first operating model." It reduced approximately 20% of the workforce. Total charges are expected to reach up to $165M — $125M in cash severance and benefits, $35M in stock-based compensation, and $5M in other costs — with the majority booked in Q2 ($99M paid in the quarter) and the remainder landing in Q3 as the Plan wraps up by September 30.

Headcount ended the quarter at 4,700. Two ways to read it: the generous one is that Cloudflare is using AI tooling to do more with fewer people, and the CFO noted that excluding the charges, Q2's GAAP net loss would have been only ~$18M — within striking distance of the company's goal of GAAP profitability by end of 2028 ("at the latest," and management says it's pacing ahead). The less generous read is that a company growing 36% chose to cut a fifth of its staff anyway, which carries real execution risk.

## Bull case

- **Durable growth with operating leverage.** 36% revenue growth, sales productivity up for the 10th consecutive quarter, and opex down to 59% of revenue (from 62% a year ago).
- **The agentic Internet is showing up in the numbers, not just the slides.** Majority non-human traffic, ~2M developers added in one quarter, and Workers moving from adoption play to revenue contributor.
- **Enterprise traction at the top end.** Record net adds across every large-customer cohort from $100K to $5M+ in annualized spend, retention at 120%, and RPO growing faster than revenue.
- **Balance sheet and capital discipline.** $4.16B in cash and securities, positive free cash flow even in a restructuring quarter, and no commodity-GPU capex binge.

## Bear case

- **The valuation prices in a near-flawless decade** — see the reverse DCF below.
- **GAAP losses persist.** Even excluding restructuring, the company is only roughly at GAAP breakeven, and stock-based compensation remains heavy — $140.6M in Q2 alone, about 20% of revenue.
- **Margin and capex pressure.** Gross margin fell 320bps YoY as paid traffic grows, and FY2026 network capex guidance of 14–15% of revenue is double Q2's 7% rate, implying a heavy second-half investment cycle.
- **Execution risk.** A 20% workforce reduction is a blunt instrument; doing it while claiming to "keep the foot on the gas" is a hard trick to pull off.
- **The agentic commerce thesis is unproven.** Wallets, cloudflare.pay, and the Monetization gateway are launches, not revenue lines — and the micropayments infrastructure has to scale to three orders of magnitude beyond Visa.

## Valuation: a reverse DCF

Multiples say the stock is expensive; a reverse DCF says *how* expensive. Instead of forecasting what Cloudflare is worth, start from the market price and solve for what it implies.

**Setup.** At ~$350 per share, market cap is roughly $125B (356M shares). Net cash is ~$0.9B ($4.16B cash and securities minus $3.27B convertible notes), so enterprise value ≈ **$124B**. Base year: FY2026 guided revenue of $2.867B with a ~10% FCF margin. Discount rate 11%, terminal growth 3%. Then model ten years of free cash flow under different paths:

| Scenario | Revenue path (10 yrs) | FY36 FCF margin | FY36 revenue | Implied EV | Per share | vs. ~$350 today |
|---|---|---|---|---|---|---|
| **Bear** | 32% decaying to 15% | 15% | ~$23B | ~$24B | ~$70 | ~−80% |
| **Bull** | 32% for 3 yrs, then 20% | 30% | ~$30B | ~$57B | ~$163 | ~−54% |
| **Aggressive bull** | 32% for 5 yrs, then 25% | 35% | ~$35B | ~$75B | ~$214 | ~−39% |
| **Market-implied** | **~38% every year** | 30% | ~$71B | ~$124B | ~$350 | — |

Read that again, because it's the whole story. Even the aggressive bull case — 32% growth sustained for five years, then 25% for five more, with free cash flow margins expanding to 35% (better than most mature software monopolies) — doesn't reach today's price. Lowering the discount rate to 10% gets that scenario to ~$91B of EV, still ~26% below the market. To justify ~$124B of enterprise value at standard assumptions, Cloudflare needs to compound revenue at roughly **38% per year for a decade** — from $2.9B to ~$71B, about 25x — while simultaneously ramping FCF margin to 30%.

The market, in other words, is not pricing Cloudflare as a fast-growing security/CDN vendor. It is pricing in Cloudflare becoming one of the defining infrastructure monopolies of the agentic era — the toll booth on machine-to-machine traffic. That future is genuinely plausible given the network position, but the reverse DCF shows how little room the price leaves for the ordinary bear case: growth merely decelerating toward 20% cuts the modeled value by half or more.

## Bottom line

The underlying business is genuinely strong: accelerating revenue, 120% net retention, record customer adds, positive free cash flow, and the most credible technical stack for agent-scale computing that any network company has articulated. The restructuring looks less like distress and more like a deliberate, expensive bet that AI lets a smaller team move faster.

But the reverse DCF is sobering. At ~$124B of enterprise value, the market already assumes ~38% growth for ten years with software-monopoly margins. The agentic Internet thesis has to work, at scale, on schedule, for the stock merely to stand still. This is a great company priced as if the future has already happened. Owning it here is a bet on inevitability, not on value.

*Disclosure: this post is for informational purposes only and is not financial advice. Company figures are sourced from Cloudflare's Q2 2026 earnings release, Form 10-Q, and earnings call transcript; the reverse DCF uses my own simplified assumptions (10-year explicit period, 11% discount rate, 3% terminal growth), which you should adjust and stress-test yourself. Do your own research before making any investment decision.*
