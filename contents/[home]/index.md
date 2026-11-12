---
slug: ""
title: Articles about application development 
description: Articles about application development using the Swift programming language.
views:
    html: pages.home
---


# Feather CMS

<section class="section-intro" id="why-feather">
<p class="eyebrow">Why Feather</p>
<h2>A working CMS you can make your own.</h2>
<p>Start with built-in capabilities, then shape the application around your product. Feather is open source, written in Swift, and designed to be extended—from its APIs and domain logic to its web surfaces.</p>
</section>

<div class="feature-grid">
<article class="feature-card">
<span class="feature-number">01</span>
<h3>Start with CMS building blocks</h3>
<p>Accounts, users, authentication, permissions, media, web pages, menus, blog, news, contact forms, newsletters, redirects, and analytics are already organized into feature modules.</p>
</article>
<article class="feature-card">
<span class="feature-number">02</span>
<h3>Every change has a place</h3>
<p>Modules own their behavior and persistence. Domain rules, use cases, infrastructure, and APIs each have clear boundaries, so product features can grow alongside the CMS.</p>
</article>
<article class="feature-card">
<span class="feature-number">03</span>
<h3>Built for agentic development</h3>
<p>Consistent module patterns and generated API contracts give coding agents a codebase they can navigate and extend alongside your team.</p>
</article>
</div>

<section class="architecture-section" id="architecture">
<div>
<p class="eyebrow">Opinionated by design</p>
<h2>One application.<br>Clear boundaries.</h2>
<p>Feather is a modular monolith: one application to run, with feature modules that make ownership explicit. Follow a request from its generated API contract through the use case and domain rules to the database or an external service.</p>
</div>
<div class="code-window" aria-label="Example Feather project structure">
<div class="code-window-head"><span>Project structure</span><span>Swift packages</span></div>
<pre><code><span class="code-accent">application/</span>
  Server · WebApp · Worker · Migrator
<span class="code-accent">modules/</span>
  cms-account-module/
  cms-media-module/
  cms-web-module/
  your-product-module/
<span class="code-accent">feather-core/</span>
  shared contracts and infrastructure
<span class="code-dim">One codebase. Modules with ownership.</span></code></pre>
</div>
</section>

<section class="capabilities">
<h2>The language you know, across the stack.</h2>
<p>If you build for iPhone, iPad, or Mac, Swift already feels familiar. Use it for the CMS backend, web app, workers, and migrations too. Feather runs on Apple silicon and Linux; Swift brings native performance, control when you need it, and direct interoperability with C APIs.</p>
</section>

<section class="agentic-section">
<div>
<p class="eyebrow">Agentic development</p>
<h2>Give coding agents a codebase they can follow.</h2>
<p class="section-copy">Feather uses consistent module patterns and established architecture approaches, including VIPER, vertical slice, hexagonal, and onion architecture. The structure makes it clear where a change belongs and how it connects to the rest of the system.</p>
</div>
<div class="principle-list">
<div class="principle"><span class="principle-mark">✓</span><div><strong>Contracts are visible</strong><small>OpenAPI definitions generate the API types.</small></div></div>
<div class="principle"><span class="principle-mark">✓</span><div><strong>Features have clear ownership</strong><small>Modules keep behavior and persistence together.</small></div></div>
<div class="principle"><span class="principle-mark">✓</span><div><strong>Dependencies have direction</strong><small>Layer boundaries show how changes should flow.</small></div></div>
</div>
</section>

<section class="closing-cta" id="get-started">
<p class="eyebrow">Open source · Now in alpha</p>
<h2>Explore the code. Shape what comes next.</h2>
<p>Feather is in active alpha, so features and APIs may change. Run the application locally, inspect the modules, and help us build a Swift CMS that works well for developers and coding agents.</p>
<div class="cta-row">
<a class="button button-primary" href="#">Get started</a>
</div>
</section>
