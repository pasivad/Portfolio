import Button from '@/components/Button';

import { CONTACT } from './constants';
import { IoMdArrowDropright } from 'react-icons/io';
import Dot from '../Dot';

const truncateUrl = (url: string) => {
  if (url.startsWith('https://')) {
    return url.substring(8);
  }
  return url;
};

const Contact = () => {
  return (
    <div className="cut-corners cut-corners-lg bg-black border border-solid border-border-secondary p-8 cursor-text">
      <div className="flex items-center gap-2 pb-4 border-b border-solid border-border-primary">
        <Dot
          size="8px"
          color="bg-success"
        />
        <div className="text-[11px] uppercase text-text-muted tracking-widest ">vlad@portfolio:~ — secure channel</div>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex gap-2 mb-2">
          <span className="text-brand-primary">$</span>whoami
        </div>
        <div className="flex flex-col gap-2 ml-4 text-text-secondary">
          <div>pasichnyktwitch@gmail.com</div>
          <div>[PL] +48 572 885 944</div>
          <div>[UA] +380 99 526 3717</div>
        </div>
        <div className="flex gap-2 my-2">
          <span className="text-brand-primary">$</span>ls --links
        </div>
        <div className="flex flex-col gap-2 ml-4 text-text-muted">
          <div>
            GITHUB
            <a
              className="text-blue-active mx-2 decoration-dashed underline underline-offset-4"
              href="https://github.com/pasivad"
              target="_blank"
            >
              {truncateUrl(CONTACT.github.url)}
            </a>
            # code + game projects
          </div>
          <div>
            LINKEDIN
            <a
              className="text-blue-active mx-2 decoration-dashed underline underline-offset-4"
              href="https://linkedin.com/in/vlad-pasichnyk"
              target="_blank"
            >
              {truncateUrl(CONTACT.linkedin.url)}
            </a>
            # work history
          </div>
          <div>
            RESUME
            <a
              className="text-blue-active mx-2 decoration-dashed underline underline-offset-4"
              href="/vlad_pasichnyk_resume.pdf"
              download="Vlad_Pasichnyk_Resume.pdf"
            >
              #
            </a>
            # PDF download
          </div>
          <div>
            GAME DEV RESUME
            <a
              className="text-blue-active mx-2 decoration-dashed underline underline-offset-4"
              href="/vlad_pasichnyk_game_dev_resume.pdf"
              download="Vlad_Pasichnyk_GAME_DEV_Resume.pdf"
            >
              #
            </a>
            # PDF download
          </div>
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <span className="text-brand-primary">$</span>connect
          <span className="animate-blink inline-block w-2 h-4 bg-brand-primary" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        <Button
          variant="primary"
          href={`mailto:${CONTACT.email}`}
          target="_blank"
        >
          <IoMdArrowDropright />
          Send Email
        </Button>
        <Button
          href={`https://${CONTACT.github.url}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Button>
        <Button
          href={`https://${CONTACT.linkedin.url}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          href="/vlad_pasichnyk_resume.pdf"
          download="Vlad_Pasichnyk_Resume.pdf"
        >
          Resume.pdf
        </Button>
        <Button
          href="/vlad_pasichnyk_game_dev_resume.pdf"
          download="Vlad_Pasichnyk_GAME_DEV_Resume.pdf"
        >
          GAME DEV Resume.pdf
        </Button>
      </div>
    </div>
  );
};

export default Contact;
