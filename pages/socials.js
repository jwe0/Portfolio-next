import Link from "next/link";

export default function Home() {
    return (
      <div>
        <div class="contact">
            <div>
                <img class="logo" src="/github-mark.png" />
                <Link href="https://github.com/jwe0">
                    <p class="info">jwe0</p>
                </Link>
            </div>
            <div>
                <img class="logo" src="/tryhackme_logo_full.svg"/>
                <Link href="https://tryhackme.com/p/jwe0">
                    <p class="info">jwe0</p>
                </Link>
            </div>
        </div>
      </div>
    );
  }
  