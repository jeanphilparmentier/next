import Image from 'next/image'
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'

export default function galery() {
  return (
    <>
      <div className="container px-4 py-5">
        <h1 className="text-center">Les images avec Next</h1>
        <div className="row">
          <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
            <p className="mt-5">Explications du développeur :</p>
            <ul className="ul-desc">
              <li>
                Ici j&apos;importe Image de <b>next/image</b>.
              </li>
              <li>
                Et grace à cela je vais pouvoir faire du lazy loading,
                compresser les images, les générer aux différents formats
                d&apos;écran, et faire un effet de blur lors du chargement des
                images. Tout simplement génial 🚀
              </li>
            </ul>
          </div>
        </div>
        <Image
          layout="responsive"
          placeholder="blur"
          src={img1}
          width="2965"
          height="3783"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={img2}
          width="3872"
          height="2592"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          width="2671"
          height="4000"
          src={img3}
        />
        {/* <img src="/assets/img1.jpg" alt="" />
        <img src="/assets/img2.jpg" alt="" />
        <img src="/assets/img3.jpg" alt="" /> */}
      </div>
    </>
  )
}
/*
 1,3Mb 1,9Mb 635kb
*/
