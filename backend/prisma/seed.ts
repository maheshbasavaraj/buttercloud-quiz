import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  await prisma.scenarioComponent.deleteMany({});
  await prisma.submission.deleteMany({});
  await prisma.scenario.deleteMany({});
  console.log('Cleared existing data.');

  const scenariosPath = path.join(__dirname, '..', '..', 'scenarios_simpler_plus_extras.json');
  if (!fs.existsSync(scenariosPath)) {
    console.log(`Skipping scenarios_all.json as it does not exist.`);
    return;
  }
  const scenariosFile = fs.readFileSync(scenariosPath, 'utf-8');
  const scenarios = JSON.parse(scenariosFile);

  for (const scenario of scenarios) {
    console.log(`Processing scenario: ${scenario.title}`);

    try {
      const description = {
        summary: scenario.summary,
        key_priorities: scenario.key_priorities,
        user_stories: scenario.user_stories,
        scale_and_performance: scenario.scale_and_performance,
        security_and_compliance: scenario.security_and_compliance,
      };

      const components = scenario.questions.map((question: any) => {
        const options = question.options.map((option: any) => ({
          id: option.option.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 50),
          label: option.option,
          score: option.score,
          justification: option.justification,
          rating: option.rating,
        }));

        return {
          componentType: question.id,
          weight: 1,
          allowedOptions: { options },
        };
      });

      await prisma.scenario.create({
        data: {
          id: scenario.id,
          title: scenario.title,
          description,
          difficulty: scenario.level,
          domainTags: '',
          creatorId: 'admin',
          components: {
            create: components,
          },
        },
      });
      console.log(`  Successfully seeded scenario: ${scenario.title}`);

    } catch (error: any) {
      console.error(`  Error processing scenario ${scenario.title}:`, error.message);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
