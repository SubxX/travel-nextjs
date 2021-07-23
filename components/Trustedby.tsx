import Image from "next/image";

export const Trustedby = () => {
  const data = [
    "/comp-one.png",
    "/comp-two.png",
    "/comp-three.png",
    "/comp-four.png",
    "/comp-five.png",
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <div className="trusted-grid">
          {data.map((img) => (
            <TrustedCompanyImage key={img} src={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedCompanyImage = ({ src }: any) => {
  return (
    <div className="trusted-comp">
      <Image src={src} alt="" width={150} height={40} objectFit="contain" />
    </div>
  );
};
