

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
      <div>
        <aside>Sidebar</aside>
            <main>{children}</main>
      </div>
    );
};

export default AboutLayout;
