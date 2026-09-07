import { istaarienVocabulary as v } from './istaarien-vocabulary';

export const istaarien = {
	nav: {
		projects: v.projects,
		about: v.aboutSLabs,
	},

	hero: {
		eyebrow: `${v.projects} · ${v.code} · ${v.apis} · ${v.experiments}`,
		titleLine1: v.build,
		titleLine2: v.experiment,
		titleLine3: v.repeat,
		description: v.placeForExperiments,
		explore: v.exploreProjects,
		about: v.aboutSLabs
	},

	projects: {
		eyebrow: `01 / ${v.projects}`,
		title: v.thingsBeingBuilt,
		kind: v.projects,

		items: {
			argos: {
				description: 'Saanart · apireart · Varent.',
				tags: [v.software, v.api, 'Open Source']
			},
			nexusCampus: {
				description: 'Saanart · Varent.',
				tags: [v.software, v.web]
			},
			hardwareLab: {
				description: `${v.experiments} · ${v.hardware} · PCB.`,
				tags: [v.hardware, 'PCB', 'Embedded']
			}
		}
	},


	about: {
		eyebrow: '02 / S LABS',
		title: v.placeForExperiments,
		text: v.aboutDescription
	},

	footer: `${v.projects} · ${v.code} · ${v.apis} · ${v.experiments}`
};