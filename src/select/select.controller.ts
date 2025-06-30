import { Controller, Post, Body } from '@nestjs/common';

@Controller('select')
export class SelectController {
  @Post()
  handleSelect(@Body() body: any) {
    const context = body.context;

    return {
      context: {
        ...context,
        action: 'on_select',
        bpp_id: 'mock-bpp-final.onrender.com',
        bpp_uri: 'https://mock-bpp-final.onrender.com',
        message_id: 'msg-onselect-001',
        timestamp: new Date().toISOString()
      },
      message: {
        order: {
          provider: {
            id: 'provider-1',
            descriptor: { name: 'Mock Store' }
          },
          items: [
            {
              id: 'item-1',
              descriptor: { name: 'Mock Product' },
              quantity: { count: 1 },
              price: { currency: 'INR', value: '100' }
            }
          ],
          fulfillments: [
            {
              type: 'Delivery',
              end: {
                location: {
                  gps: '12.9715987,77.5945627',
                  address: {
                    door: '123',
                    locality: 'Koramangala',
                    city: 'Bengaluru',
                    state: 'KA',
                    country: 'IND',
                    area_code: '560034'
                  }
                },
                contact: {
                  phone: '9999999999',
                  email: 'test@example.com'
                }
              }
            }
          ]
        }
      }
    };
  }
}
