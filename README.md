![Project Logo](docs/images/logo.png)

# ebb
[![npm version](https://badge.fury.io/js/ebb-core.svg)](https://badge.fury.io/js/ebb-core)
[![Code Coverage](http://aircover.eventualconsistency.net/badges/ebb-framework/ebb-core/coverage.svg)](http://aircover.eventualconsistency.net/ebb-framework/ebb-core)
[![Chat on Gitter](https://badges.gitter.im/ebb-messaging/Lobby.svg)](https://gitter.im/ebb-messaging/Lobby)
[![Build Status](http://drone.eventualconsistency.net/api/badges/ebb-framework/ebb-core/status.svg)](http://drone.eventualconsistency.net/ebb-framework/ebb-core)
[![Prod Dependencies](https://david-dm.org/ebb-framework/ebb-core/status.svg)](https://david-dm.org/ebb-framework/ebb-core)
[![Dev Dependencies](https://david-dm.org/ebb-framework/ebb-core/dev-status.svg)](https://david-dm.org/ebb-framework/ebb-core#info=devDependencies)

[![Stats](https://nodei.co/npm/ebb-core.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/ebb-core)
[![Downloads](https://nodei.co/npm-dl/ebb-core.png?height=2)](https://npmjs.com/package/ebb-core)


The ebb project is a messaging framework that allows for handling of streams of
varied message types. The framework can be extended with new serialization formats
and transports. The core goals of this project are to support the easy development
of message and log-based architectures.

## formats
All messages written/read from a transport are stored as a buffer of bytes. The
translation to/from the buffer can use any deterministic format or protocol you
want. Out of the box, we support the following formats:

- Avro (via `avsc` package)
- JSON (JSON to string, string to byte-buffer)
- Protocol Buffers (via `protocol-buffers` package)

## transports
A transport is the streaming mechanism for getting data from a publisher to
a consumer. The supported transports are:

- In Process (for testing purposes)
- Kafka

## learn more
To learn more, check out our:

  - [Developer Guide](docs/development.md) for contributing.
  - [Integration Guide](docs/integration.md) for using in your application.


