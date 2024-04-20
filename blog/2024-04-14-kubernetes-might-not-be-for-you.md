---
slug: kubernetes-might-not-be-for-you
title: Kubernetes might not be for you
tags: [platform-engineering, kubernetes]
---

Most mornings, after pulling myself out of bed, I put some semblance of a breakfast together. While eating, I usually take in the news (via the Android app of a traditional newspaper). I timebox this to about 10 minutes, which fits my breakfast-eating pace, and balances my desire to be an educated, responsible citizen with my tolerance for the existential dread I’m going to feel after reading about US politics.

Once I’m sufficiently fed/educated/terrified, I head over to the couch, where the dog joins me for a cuddle while I sip my coffee. At this point, I usually switch over to Hacker News. I’ve found that Hacker News is a pretty reliable purveyor of articles on topics that overlap my interests. I also appreciate that it gives me an nudge to get outside my go-to subjects, into pretty niche topics in tech, science, math, culture, philosophy (and interesting people who recently died) – all with a taint of delightful nerdiness. 

And unlike the comments in my newspaper’s app (which are really best avoided), the culture of discussion in the Hacker News community is explicitly civil, and values intellectual honesty and earnest curiosity. Comments are often written by surprisingly authoritative people, and points of debate are usually argued in a thoughtful way. Especially for topics I may never have put much thought into before, this leaves me with a sense of the breadth of possibilities and an appreciation for different points of view.

Of course, some articles are on topics in which I’m professionally knowledgeable, and these can land on me.. differently. One of these topics is Kubernetes (and platform/cloud engineering in general), and unlike a lot of topics on Hacker News, I’ve found that this topic provokes a certain, reliably repetitive debate.

## The Prototypal Hacker News Kubernetes Article

Here’s a synopsis of this type of article:

> My app is deployed with a simple shell script over ssh, scales great, and handles X requests a second. This is simple and effective; people who choose Kubernetes are accepting a huge amount of complexity and overhead to do what I can do with much simpler tools.

This can also get started from the opposite direction:

> Our company uses Kubernetes, and here’s some of the lessons we’ve learned, tools we use with it, and problems we’ve solved. There have been challenges, but overall we’re happy with Kubernetes.

The themes of comments tend to fall into these categories:

* Kubernetes won a marketing war, its popularity is driven by resume-driven DevOps people or IT executives obsessed with buzzwords
* Here’s a list of my Kubernetes horror stories (with some legitimate, truly horrifying stories)
* Kubernetes is unnecessarily complex, here’s the way I do it instead (simpler bespoke solutions with Ansible/Docker/Terraform/ssh, public cloud-provided services like ECS/Lambda, monolithic deployments, simpler alternatives such as Nomad, etc)
* Kubernetes is designed for FAANG scale, and isn’t appropriate for mere mortals. You’re never going to need to scale to the point where the overhead is justified.

The counterpoints are usually something like this:

* Here’s all the things you get from Kubernetes that you’d have to solve yourself if you don’t use it (rolling deployments, self-healing, load balancing, autoscaling, etc)
* The overhead of Kubernetes is worth it when you’re faced with the need to scale your app significantly
* Kubernetes complexity is an expression of the essential complexity required to run distributed systems, it provides the right abstractions for the problem space
* Kubernetes came out of the experience of many iterations of operational platforms at Google, and solves the problem of large deployments more effectively than anything else

## The TL;DR on if Kubernetes is right for you

Cards on the table: I’m a fan of Kubernetes. I’ve been working in the platform engineering space for about 15 years, and for the last 7 years I’ve been building platforms on top of Kubernetes. There’s a lot of reasons for this, but I want to be clear about a few things:

* The complexity cost of Kubernetes is very real
* There are many legitimate horror stories (especially before well-managed managed Kubernetes solutions were available)
* It requires a (perhaps small) team of experts to run effectively at scale
* Kuberentes doesn’t really provide everything you need without building a developer platform on top of it

Here’s the most concise heuristic I can come up with to determine if Kubernetes is an appropriate solution for you:

* Kubernetes is almost certainly **the wrong choice** for a small team, or startup who’s rapidly iterating on their business model, and/or anyone who’s running a small number of distinct workloads (e.g. a single monolith)
* Kubernetes is almost certainly **a great choice** for a larger team (~30+ developers), companies with microservices architectures (or more than a few independent high-availability workloads), where the overhead of building a platform can be amortized across all your developers and workloads

If you’re in the area in between these two points, there’s probably a bunch of context, trade-offs, and other factors to consider.

## The actual whole point of Kubernetes

Here’s what I think is the most relevant property of Kubernetes to feed into the decision: 

***Kubernetes provides an abstraction layer between developer concerns and operational concerns.***

It provides a rich set of primitives that describe workloads in terms that developers care about (e.g. memory/CPU requirements, auto-scaling factors, health checks, etc) that make them utterly consistent from an operational perspective. This seemingly simple separation of concerns provides very significant operational capabilities that don’t exist in a heterogeneous environment.

Once you’ve gotten to a certain level of maturity with Kubernetes, a platform team can do pretty major changes and upgrades of the platform and its components across the company’s entire portfolio of applications – safely – with confidence that it won’t affect customers. Even more, this can be done without much (if any) coordination with developer teams! 

For example, a platform team could run OS upgrades, deploy new security/compliance tools, swap out observability infrastructure, or make significant changes to the network design- across your entire fleet of services- safely and without disruptions. If you have a lot of different workloads (regardless of the scale of each workload), doing this kind of thing without Kubernetes can be extremely costly, time consuming, and scary.

## Kubernetes is a platform for building platforms

The platform my team has built on Kubernetes was inspired by SaaS platforms like Heroku or Fly.io, and are designed to feel serverless. Developers don’t have to know a lot about the underlying capabilities of the cloud provider, how ingress is implemented, TLS certificates, load balancing, reserved vs spot instances, how logs, metrics, or traces are captured, etc. They only have to develop against a specific contract, the core of which is a small subset of the capabilities exposed by Kubernetes, which we simplify a great deal through intelligent defaults, validation, and scaffolding. 

I don’t want to understate the effort we’ve had to put in to get to this point, but the result is that our developers really like this platform- and are measurably happier and more productive across a whole bunch of objective dimensions. In internal engagement surveys, it’s one of the most universally praised aspects of life in our engineering team.

This said, my company has about ~150 developers working on cloud-based services. We manage a huge fleet of microservices that communicate with IoT devices across the world. In our case, the cost of building a great developer platform on Kubernetes is absolutely dwarfed by the cost of the alternatives (a number of which we’ve used in the past). It’s been an enormous win for us, both in terms of customer experience, reliability, developer happiness, security, cost management, and ease of operations.

If your company looks like this (or larger), an internal platform built on Kubernetes is likely a great choice.

## No Kubernetes for you

All this said, here’s the other side:

I’m not sure if I’ve got another startup in my future, but if I did, the odds that I would be using Kubernetes is pretty close to zero. I’d be focusing on finding a business model that made customers happy, and every second I spent on operational concerns would be directly in competition with that goal. The abstraction layer between developer and operational concerns wouldn’t provide any value in this situation, since a small number of people would be managing both. I’d probably choose the simplest deployment/operational tools available, and I’d spend as little time worrying about scaling as possible. 

But later on… if we were successful, had found our market, and we were scaling up (e.g. hiring beyond our ~30th developer), and we had more than a few distinct workloads… I’d start thinking about Kubernetes again.

## The moral of the story

If Kubernetes seems like an over-engineered, complicated, and inscrutable solution to a problem you don’t think you have… you probably don’t. Kubernetes isn’t for you. But there’s a reason it’s used so broadly, and it’s not because everyone is dumb and distracted by buzzwords.

Hopefully we can raise the level of discussion on Hacker News around Kubernetes to match that of a random (but admittedly delightful) [article about mechanical watches](https://news.ycombinator.com/item?id=31261533).
