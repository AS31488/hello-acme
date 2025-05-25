import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Raleway } from 'next/font/google';
import Image from 'next/image';

const raleway = Raleway ({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'],    // Specify the subsets
});



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
         <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <p className={raleway.className}>
          Jaffar's Panahi's "It Was Just An Accident" Scores Palme D'Or Triumph At Cannes 2025; Director Delivers Defiant Speech For Freedom.
          CANNES, France – In a politically charged and emotionally resonant climax to the 78th Cannes Film Festival, Iranian auteur Jafar Panahi’s powerful drama, "It Was Just An Accident," has tonight claimed the prestigious Palme d'Or. The win, announced by Jury President Juliette Binoche, was met with a thunderous standing ovation for the filmmaker, who has faced years of persecution and a filmmaking ban in his home country.

          Panahi, visibly moved, took to the stage to accept the festival's top honor, delivering a stirring speech that underscored the resilience of art and the unyielding desire for freedom. "This award is not mine," Panahi stated, his voice echoing through the Grand Théâtre Lumière, "but belongs to all the artists and people of Iran who strive for freedom and truth, often in the face of unimaginable adversity. The most important thing is our country and the freedom of our country. Let's arrive at this moment, together, when no one dares to say what we should wear, what we should or shouldn't do.”

          The film, reportedly a gripping narrative that unfolds after a seemingly minor incident, is said to be a profound commentary on contemporary Iranian society, justice, and the enduring human spirit. Its selection as the Palme d'Or winner marks a significant moment for Iranian cinema and for filmmakers globally who work under oppressive regimes.

          NEON, the independent distribution powerhouse, continued its remarkable streak, acquiring North American rights to "It Was Just An Accident." This marks the distributor's sixth consecutive Palme d'Or winner, a testament to their keen eye for groundbreaking cinema. Speaking on their latest acquisition, NEON head Tom Quinn expressed, "Jafar Panahi is a cinematic titan whose voice and vision are more crucial than ever. 'It Was Just An Accident' is a courageous and masterfully crafted film that speaks volumes. We are profoundly honored to be part of its journey and to bring this vital work to American audiences. Panahi’s unwavering commitment to his art, despite the risks, is an inspiration, and this film is a powerful reminder of cinema's ability to challenge and illuminate."

          Jury President Juliette Binoche, in explaining the jury's decision, lauded the film's profound impact and artistic merit. "Cinema and art are provocative," Binoche declared. "They mobilize a force that transforms darkness into forgiveness, hope, and new life. 'It Was Just An Accident' resonated deeply with the entire jury for its unflinching honesty, its compelling narrative, and its extraordinary courage. Jafar Panahi has crafted a film that is not only a remarkable piece of cinema but a vital statement on the human condition and the enduring fight for freedom of expression. It’s a film that stays with you, that demands reflection, and ultimately, inspires."

          The win for "It Was Just An Accident" concludes a Cannes Film Festival that has once again proven to be a vibrant platform for diverse voices and a crucial launching pad for films that will shape the cinematic landscape in the year to come. Panahi’s triumph is a poignant reminder of the power of storytelling to transcend borders and to champion the cause of liberty.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src={"https://d3i6fh83elv35t.cloudfront.net/static/2025/05/2025-05-24T190721Z_1953041751_UP1EL5O1H4776_RTRMADP_3_FILMFESTIVAL-CANNES-AWARDS-1024x683.jpg"}
          width={1000}
          height={760}
          className="hidden md:block"
          alt="screenshot of Jafari."
          />
          <Image
            src="/public/Images/Simple Accident.png" // Assuming hero-mobile.png is in the public folder
            width={560}
            height={620}
            className="block md:hidden" // Block on small screens, hidden on medium screens and up
            alt="Screenshot of the dashboard project showing mobile version" // Added alt text
          />
        </div>
      </div>
    </main>
  );
}
