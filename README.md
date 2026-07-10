# Eden Edge Hub

> An event-driven IoT edge application built from first principles using TypeScript and Node.js.

## Overview

Eden Edge Hub is a hobby project designed to automate the control and monitoring of a tropical ecosystem.

The project simulates an industrial edge device that reads sensor data, creates domain events, and publishes those events to interested subscribers.

Although the current implementation uses simulated sensor data, the architecture has been designed so that the simulator will be replaced with real RS485 hardware without affecting the rest of the application.

The long-term goal is to evolve the system into a complete IoT platform consisting of:

* Raspberry Pi Edge Hub
* RS485 sensor network
* Event-driven application
* Database persistence
* React dashboard
* MQTT integration
* Raspberry Pi deployment

---

# Project Philosophy

This project is intentionally built in small vertical slices.

Rather than introducing frameworks and design patterns immediately, each architectural concept is added only when there is a genuine need for it.

The emphasis is on learning software engineering principles such as:

* Domain modelling
* Separation of responsibilities
* Event-driven architecture
* Publish/Subscribe
* Testing
* Safe refactoring
* Incremental design

The objective is not simply to produce a working application, but to understand *why* each component exists and how they communicate.

---

# Current Architecture

```
Scheduler
    │
    ▼
Sensor Simulator
    │
    ▼
SensorReading
    │
    ▼
Event Factory
    │
    ▼
Event Bus
    │
    ▼
Logger
```

Every configured interval the scheduler:

1. Reads the sensor.
2. Creates a domain event.
3. Publishes the event.
4. Subscribers react independently.

This architecture allows new functionality to be added without modifying the scheduler.

Future subscribers will include:

```
Event Bus
├── Logger
├── Database
├── MQTT Publisher
└── Dashboard
```

---

# Current Features

* Simulated temperature and humidity sensor
* Event-driven architecture
* Domain event creation
* Event bus using Node.js EventEmitter
* Console logging subscriber
* Unit tests using Vitest
* Strongly typed domain models

---

# Project Structure

```
src/
├── config.ts
├── database.ts
├── eventBus.ts
├── eventFactory.ts
├── index.ts
├── logger.ts
├── mqtt.ts
├── scheduler.ts
├── sensors.ts
├── types.ts
└── *.test.ts
```

Each file has a single responsibility, making the system easy to understand and extend.

---

# Development Roadmap

## Phase 1

* ✅ Sensor simulation
* ✅ Event bus
* ✅ Logger
* ✅ Unit testing

## Phase 2

* Configuration
* Database subscriber
* Safe refactoring

## Phase 3

* Database integration (Supabase)

## Phase 4

* React dashboard
* Historical data
* Live sensor readings

## Phase 5

* Raspberry Pi deployment
* RS485 sensor integration

---

# Design Principles

This project aims to follow several core engineering principles:

* Keep components focused on a single responsibility.
* Prefer composition over tight coupling.
* Add new behaviour by subscribing to events.
* Refactor safely using automated tests.
* Introduce complexity only when it solves a real problem.

---

# Running the Project

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Run the test suite:

```bash
npm test
```

---

# Why Simulated Sensors?

The physical Raspberry Pi hardware is not yet available.

Instead of delaying development, the project uses a digital twin of the edge device.

When the hardware arrives, only the sensor implementation should need to change.

The remainder of the application—including scheduling, events, logging, persistence, and dashboard integration—should remain unchanged.

---

# Learning Outcomes

This repository documents the process of learning how to design software systems from first principles.

Rather than focusing on frameworks, the project explores:

* Software architecture
* Event-driven systems
* IoT communication patterns
* Test-driven development
* Incremental refactoring
* Building maintainable systems
