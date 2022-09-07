import { request } from 'http';
import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';


createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-08-01 09:00:00')
        },
      ],
    })
  },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', ()=> {
        return this.schema.all('transaction')
      })


      this.post('/transactions', (schema, request) => {
          const data = JSON.parse(request.requestBody)


          return schema.create('transaction', data);
      } )
    }
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
