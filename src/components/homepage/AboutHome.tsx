import reactLogo from "../../assets/images/svg/react.svg";

export const AboutHome = () => {
  return (
    <>
      <div className="w-full md:w-2/5 flex flex-col gap-12">
        <h3 className="text-4xl font-semibold">More than just apps</h3>
        <p>
          Praesent consequat elit sed erat pharetra, quis ullamcorper dolor
          dignissim. Sed gravida efficitur purus sed lacinia. Pellentesque
          gravida lacus mauris, scelerisque bibendum nisi scelerisque id. Sed
          bibendum molestie justo, nec lobortis urna faucibus nec. Morbi rhoncus
          dictum odio fermentum lobortis. Vestibulum dapibus quam quis arcu
          rutrum, non tempor felis finibus.
        </p>
        <div>
          <img src={reactLogo} alt="" />
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <p className="pb-10">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Proin ultrices dui eu efficitur dictum.
          Integer enim dolor, mattis ac risus nec, iaculis bibendum mauris. In
          ipsum massa, aliquet eu finibus sed, maximus quis turpis. Mauris
          semper mauris eu enim lobortis fermentum.
        </p>
        <p>
          Etiam quis mauris mauris. In ac arcu enim. Suspendisse id mattis sem.
          Mauris egestas augue luctus justo cursus, nec fermentum elit
          vulputate. Nullam at dapibus orci, sed dictum velit. Maecenas id risus
          quis ipsum lacinia hendrerit. In ipsum est, mollis aliquet bibendum
          id, dictum id leo.
        </p>
      </div>
    </>
  );
};
