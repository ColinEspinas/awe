# @ineka-dev/engine

## 2.2.0

### Minor Changes

- [#19](https://github.com/ineka-dev/engine/pull/19) [`fd47614`](https://github.com/ineka-dev/engine/commit/fd47614c7ddd4366c443cbee99be108e984c30dc) Thanks [@ColinEspinas](https://github.com/ColinEspinas)! - Changed engine loop and time management class to improve developer experience.

## 2.1.2

### Patch Changes

- [#14](https://github.com/ineka-dev/engine/pull/14) [`10d5840`](https://github.com/ineka-dev/engine/commit/10d584073f459a4a6e5ec5ae6c48deab5166c3c5) Thanks [@ColinEspinas](https://github.com/ColinEspinas)! - Updated project tooling

## [2.1.1](https://github.com/ineka-dev/engine/compare/v2.1.0...v2.1.1) (2023-01-13)

## [2.1.0](https://github.com/ineka-dev/engine/compare/v2.0.8...v2.1.0) (2022-10-15)

### Features

- added engine error handling and made engine container more available ([d8669a2](https://github.com/ineka-dev/engine/commit/d8669a28f6ad20fca173c557a9ebd982211e9f6d))

## [2.0.8](https://github.com/ineka-dev/engine/compare/v2.0.7...v2.0.8) (2022-10-02)

### Bug Fixes

- fixedStep where not called ([ed2b86a](https://github.com/ineka-dev/engine/commit/ed2b86aeba85e45c1a6e90644c3a2f900f51963d))

## [2.0.7](https://github.com/ineka-dev/engine/compare/v2.0.6...v2.0.7) (2022-10-02)

### Bug Fixes

- fixed scope issues with fixedStep calls ([04c1bd3](https://github.com/ineka-dev/engine/commit/04c1bd3c55f4486f1c4f506fade7f88634d15dea))

## [2.0.6](https://github.com/ineka-dev/engine/compare/v2.0.5...v2.0.6) (2022-10-02)

### Bug Fixes

- trying non-synchronous fixedSteps calls with promises ([10d04dc](https://github.com/ineka-dev/engine/commit/10d04dc22bbe52d40dffa3ad918e34279033cbd8))

## [2.0.5](https://github.com/ineka-dev/engine/compare/v2.0.4...v2.0.5) (2022-10-02)

### Bug Fixes

- **nodes:** added id getter and fixed children remove method ([c5076ba](https://github.com/ineka-dev/engine/commit/c5076ba1b849beae090c6a65ceee141eff856b6a))

## [2.0.4](https://github.com/ineka-dev/engine/compare/v2.0.3...v2.0.4) (2022-10-02)

### Bug Fixes

- **nodes:** node added to children after loading are now loaded ([51e7f5c](https://github.com/ineka-dev/engine/commit/51e7f5c54acc7d4ab88230c58e5c2684df628a87))

## [2.0.3](https://github.com/ineka-dev/engine/compare/v2.0.2...v2.0.3) (2022-05-11)

## [2.0.2](https://github.com/ineka-dev/engine/compare/v2.0.1...v2.0.2) (2022-05-11)

## [2.0.1](https://github.com/ineka-dev/engine/compare/v2.0.0...v2.0.1) (2022-05-11)

## [2.0.0](https://github.com/ineka-dev/engine/compare/v1.4.0...v2.0.0) (2022-05-09)

### chore

- awe is now Ineka ([d7e3462](https://github.com/ineka-dev/engine/commit/d7e34622e135940c82e496d7faefc4cdcb2f1695))

### BREAKING CHANGES

- Package name is now @ineka/engine

## [1.4.0](https://github.com/colinespinas/awe/compare/v1.3.0...v1.4.0) (2022-05-08)

### Bug Fixes

- framerate option wasn't registered by the time system ([b604317](https://github.com/colinespinas/awe/commit/b604317f5a7882fb337e205f4ff85fc2028186d8))

### Features

- added parent and engine to node ([e54c8e2](https://github.com/colinespinas/awe/commit/e54c8e25db7dd2d912dfbc37c6fd916411bd4eb8))

## [1.3.0](https://github.com/colinespinas/awe/compare/v1.2.0...v1.3.0) (2022-05-08)

### Bug Fixes

- **step-loop:** step loop now working as intended, fixed deltatime issues ([5a82f1f](https://github.com/colinespinas/awe/commit/5a82f1fd8671bba62de4b2c8270ccd3eb85853c8))

### Features

- **step-loop:** added basic step loop with fixed timestep option ([37f23ab](https://github.com/colinespinas/awe/commit/37f23ab9068699b06e7add07514db13198a90029))

## [1.2.0](https://github.com/colinespinas/awe/compare/v1.1.0...v1.2.0) (2021-11-26)

### Features

- added systems and step loop to engine class ([24667ba](https://github.com/colinespinas/awe/commit/24667bad5bb480546558d848663a9af6b2a7f0cd))

## [1.1.0](https://github.com/colinespinas/awe/compare/v1.0.0...v1.1.0) (2021-11-16)

### Features

- **nodes:** added outer and inner nodes methods to handle engine runtime ([76d099f](https://github.com/colinespinas/awe/commit/76d099fb7bf93bada4c50a9d2dea6d892ceac6ba))

## 1.0.0 (2021-11-14)

### Features

- added basic graph features with outer/inner nodes ([8f38374](https://github.com/colinespinas/awe/commit/8f383742421ec5e2ba0fb33ef9aaab9e5e1b71a3))
- setup project structure and CI/CD jobs ([62a865b](https://github.com/colinespinas/awe/commit/62a865ba2db9beff1573fc272816c22f1351ad15))
