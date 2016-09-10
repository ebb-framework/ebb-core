![Project Logo](docs/images/logo.png)

# ebb
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


