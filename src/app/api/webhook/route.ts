import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const VERIFY_TOKEN = process.env.VERIFY_TOKEN

export async function GET(req: NextRequest, res:any) {

  // res.setHeader('X-WhatsApp-Validation','Ignore');

  const mode = req.nextUrl.searchParams.get('hub.mode');
  let token = req.nextUrl.searchParams.get('hub.verify_token');
  let challenge:number = Number(req.nextUrl.searchParams.get('hub.challenge'));


    if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log(challenge)
      return NextResponse.json(Number(challenge));

    } 
      // Responds with '403 Forbidden' if verify tokens do not match
      
  }
  return NextResponse.json({ error: 'Forbidden Error', status: 403 });
}

/*

export async function GET(  
                req: NextApiRequest,
                res: NextApiResponse<ResponseData>) {

/*
  let resp:any = {}


  // Check if a token and mode were sent


    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      console.log(challenge)
      return NextResponse.json(challenge.replace('\"',""));
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match

      resp = { error: 'Forbidden Error' , status: 403 };
      return NextResponse.json(resp);
    }
  }


res.status(200).json({ message: 'Hello from Next.js!' })


}
*/
/*
export async function POST( req: NextRequest, res: NextResponse) {

    const body = await req.json()


    return NextResponse.json({ method: 'POST' });
  }

  */