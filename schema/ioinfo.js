
const schemes = {
  alpacaOptions: {
    multiple: true,
    type: 'select',
    optionLabels: ['HTTP', 'HTTPS', 'WebSocket', 'WebSocket Secure'],
  },
  title: 'Schemes',
  type: 'array',
  enum: ['http', 'https', 'ws', 'wss'],
};

const consumes = {
  title: 'Consumes',
  type: 'array',
  uniqueItems: true,
  items: {
    title: 'MIME type',
    type: 'string',
    format: 'mime',
  },
};

const produces = {
  title: 'Produces',
  type: 'array',
  uniqueItems: true,
  items: {
    title: 'MIME type',
    type: 'string',
    format: 'mime',
  },
};

module.exports = { schemes, consumes, produces };
