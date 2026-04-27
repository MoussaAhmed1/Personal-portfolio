import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const CV_FILE_NAME = 'Mousa_Ahmed_Frontend_Developer.pdf';
const CV_FILE_PATH = join(process.cwd(), 'public', 'cv', CV_FILE_NAME);

export async function GET() {
  try {
    const fileBuffer = await readFile(CV_FILE_PATH);

    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${CV_FILE_NAME}"`,
        'Content-Length': fileBuffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch {
    return Response.json({ error: 'CV not found' }, { status: 404 });
  }
}
