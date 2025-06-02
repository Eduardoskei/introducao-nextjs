import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar 
      link1={{href: '/about', linkName: 'about'}}
      link2={{href: '/server-client', linkName: 'client'}}
      link3={{href: '/server-example', linkName: 'example'}}
      />
    </div>
  );
}
