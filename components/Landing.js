import Link from 'next/link';
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <div className="hero bg-base" style={{"height": "95vh"}}>
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
              Fun fact: I created this project in four days, learning and using Next.js for the first time ever!
            </p>
            <Link href="/draw" passHref>
              <button className="btn btn-primary">Start drawing!</button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="max-w-md m-5 mx-auto text-center shadow-2xl card">
        <figure>
          <Image src="/profile.png" width="500" height="500" className="max-w-sm" />
        </figure> 
        <div className="card-body">
          <h2 className="card-title">Fanno Chea
            <div className="mx-2 badge badge-secondary">Developer</div>
          </h2> 
          <p>My background is in technical support, and I love solving problems. Now, I'm looking to create solutions as a software developer!</p> 
          <div className="justify-end card-actions">
            <a href="https://github.com/FaceToKeyboard"><button className="btn btn-secondary">Github</button></a>
            <a href="https://www.linkedin.com/in/fanno-chea/"><button className="btn btn-secondary">LinkedIn</button></a>
          </div>
        </div>
      </div> 
    </>
  );
}
