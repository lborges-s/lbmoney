import { createServer, Model } from 'miragejs';

export const mirageServer = () =>
  createServer({
    models: {
      transaction: Model
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2022-02-12 09:00:00')
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 1000,
            createdAt: new Date('2022-02-13 10:00:00')
          }
        ]
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => this.schema.all('transaction'));

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      });
    }
  });
