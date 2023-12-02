"use client";

import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../leiloes_online/Logo";

export const Footer = () => {
  return (
    <FlowbiteFooter container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Logo/>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="Feito com" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Contatos" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Linkedln</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Terms & Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright by="Matheus Melo" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};