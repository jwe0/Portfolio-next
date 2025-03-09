import Link from "next/link";

export default function Home() {
    return (
      <div>
          <div className="projects" id="projects">
            <div>
              <h1 class="title">Pasteit</h1>
              <p class="description">PasteIT is an open source encrypted free speech platform for you to paste text.</p>
              <img src="/pasteit.png"/>
              <p class="features">Features</p>
              <ul>
                <li>Open Source</li>
                <li>Encrypted pastes</li>
                <li>No logs policy</li>
                <li>Account codes in place of emails</li>
                <li>Free</li>
              </ul>
              <Link class="link" href="https://github.com/jwe0/pasteit">
                Download
              </Link>
            </div>

            <div>
              <h1 class="title">SimpleShell</h1>
              <p class="description">Simple shell is a python project that creates and catches reverse shells</p>
              <img src="/simpleshell.png"/>
              <p class="features">Features</p>
              <ul>
                <li>Create payloas</li>
                <li>Catch shells</li>
                <li>Custom payload support</li>
              </ul>
              <Link class="link" href="https://github.com/jwe0/simpleshell">
                Download
              </Link>
            </div>
          </div>  

      </div>
    );
  }
  