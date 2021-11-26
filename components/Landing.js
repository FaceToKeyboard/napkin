import Link from 'next/link';
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <div className="min-h-screen hero bg-base">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="max-w-sm">
            <Image src="/app_preview.png" width="859" height="700" className="shadow-2xl max-h-72 rounded-xl" alt="A small preview of the drawing webapp" />
          </div>
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              Hello!
            </h1> 
            <p>
              This simple sketching webapp uses the &lt;canvas&gt; element and some javascript to create an area where you can draw freeform lines. You can then save your drawing as a png or jpg.
            </p>
            <p className="mb-5">
              Fun fact: I created this project in four days, and using Next.js for the first time ever!
            </p>
            <Link href="/draw" passHref>
              <button className="btn btn-primary">Start drawing!</button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto text-center shadow-2xl card">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Top image
            <div className="mx-2 badge badge-secondary">NEW</div>
          </h2> 
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-end card-actions">
            <button className="btn btn-secondary">More info</button>
          </div>
        </div>
      </div> 
    </>
  );
}
