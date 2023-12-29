import { NextRequest, NextResponse } from 'next/server';
 
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const VERIFY_TOKEN = process.env.VERIFY_TOKEN

export async function GET(req: NextRequest, res: NextResponse) {

    let resp:any = {}
  const mode = req.nextUrl.searchParams.get("hub.mode");
  let token = req.nextUrl.searchParams.get("hub.verify_token");
  let challenge = req.nextUrl.searchParams.get("hub.challenge") as string;

  // Check if a token and mode were sent
  if (mode && token) {

    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      console.log(challenge)
      return NextResponse.json(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match

      resp = { error: 'Forbidden Error' , status: 403 };
      return NextResponse.json(resp.strReplace('\"',""));
    }
  }



}

export async function POST( req: NextRequest, res: NextResponse) {

    const body = await req.json()


    return NextResponse.json({ method: 'POST' });
  }