import type { Preset } from '../types';

/* eslint sort-keys: ["error", "asc", {caseSensitive: false, natural: true}] */

export const presets: Record<string, Preset> = {
  'js-app': {
    description: 'Default configuration for webapps.',
    extends: ['config:recommended', ':pinAllExceptPeerDependencies'],
  },
  'js-lib': {
    description: 'Default configuration for libraries.',
    extends: ['config:recommended', ':pinOnlyDevDependencies'],
  },
  recommended: {
    description: 'Default base configuration for all languages.',
    extends: [
      ':dependencyDashboard',
      ':semanticPrefixFixDepsChoreOthers',
      ':ignoreModulesAndTests',
      'group:monorepos',
      'group:recommended',
      'replacements:all',
      'workarounds:all',
    ],
  },
  semverAllMonthly: {
    description:
      'Preserve SemVer ranges and update everything together once a month.',
    extends: [
      ':preserveSemverRanges',
      'group:all',
      'schedule:monthly',
      ':maintainLockFilesMonthly',
    ],
    lockFileMaintenance: {
      commitMessageAction: 'Update',
      extends: ['group:all'],
    },
    separateMajorMinor: false,
  },
};
