export interface PremiseStep {
  id: number;
  title: string;
  body: string;
  stageLabel: string;
}

export const premiseSteps: PremiseStep[] = [
  {
    id: 1,
    title: 'The candle',
    body: 'What you see. Open, high, low, close: a record of what price did.',
    stageLabel: 'WHAT YOU SEE',
  },
  {
    id: 2,
    title: 'The wick',
    body: 'Price travelled further than it settled. Something pushed, and something pushed back.',
    stageLabel: 'THE REACH',
  },
  {
    id: 3,
    title: 'Underneath',
    body: 'Scheduled events, unscheduled news, decisions, expectations. The conditions that price was made in.',
    stageLabel: 'WHAT\'S UNDERNEATH',
  },
  {
    id: 4,
    title: 'The question',
    body: 'Not \'what pattern is this?\' but \'what was the market responding to?\'',
    stageLabel: 'THE QUESTION',
  },
];
