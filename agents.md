# Agents Instructions

## General guidelines
- Always discuss the purpose and goals of the agent with the user before proceeding.
- Always apply best practices for security and privacy.
- Ensure that the agent's actions align with the user's intentions and ethical standards.

## Development Instructions
- Use modular code structure for easy maintenance and updates.
- Use design patterns suitable for agent-based systems.
- Implement robust error handling and logging mechanisms.
- Write comprehensive unit and integration tests to ensure reliability.
- Document the code and provide clear instructions for future developers.
- Use `docker run --rm -it -v ${PWD}:/app -w /app -p 127.0.0.1:{PORT}:{PORT} {IMAGE} {COMMAND}` for command runs in a Docker environment, replacing `{PORT}`, `{IMAGE}`, and `{COMMAND}` as needed.
