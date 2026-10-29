import ActionLink from '../components/ActionLink'
import Card from '../components/Card'
import { HeartIcon, MailIcon } from '../components/icons'
import WingButton from '../components/WingButton'
import { contact, unavailableNotes } from '../data/contact'
import SocialLink from './contact/SocialLink'

const isEmail = (value) => /^[^\s@[\]]+@[^\s@[\]]+\.[^\s@[\]]+$/.test(value)

// Social links, email, and shortcuts to the about and projects windows.
export default function ContactWindow({ openApp }) {
  const emailHref = isEmail(contact.email) ? `mailto:${contact.email}` : ''

  return (
    <div className="grid gap-4">
      <Card className="flex items-center gap-3 bg-linear-to-br from-primary-50 to-secondary-50">
        <span className="grid size-10 flex-none place-items-center rounded-full bg-primary">
          <HeartIcon />
        </span>
        <div>
          <p className="font-semibold text-base-dark">{contact.headline}</p>
          <p>{contact.availability}</p>
        </div>
      </Card>

      <div className="@container">
        <div className="grid items-start gap-4 @lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Card className="grid gap-4">
            <h3>find me online</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
              {contact.socials.map((social, i) => (
                <SocialLink key={social.id} social={social} tone={i % 2 ? 'secondary' : 'primary'} />
              ))}
            </div>
            <dl className="grid gap-2">
              <div className="flex items-center gap-3 rounded-xl bg-primary-50 p-3">
                <span className="flex-none text-base-dark">
                  <MailIcon />
                </span>
                <div className="min-w-0">
                  <dt className="font-semibold text-base-dark">Email</dt>
                  <dd className="break-words">{contact.email}</dd>
                </div>
              </div>
              <div className="rounded-xl bg-primary-50 p-3">
                <dt className="font-semibold text-base-dark">Based in</dt>
                <dd>{contact.location}</dd>
              </div>
            </dl>
            <div className="flex justify-center pt-1">
              <ActionLink href={emailHref} label="email me" newTab={false} unavailableNote={unavailableNotes.email} />
            </div>
          </Card>

          <Card className="grid content-start gap-3 bg-linear-to-br from-primary-50 to-secondary-50">
            <h3>Curious about me first?</h3>
            <p className="text-caption">Peek at who I am and what I have made before you say hi.</p>
            <div className="grid justify-items-center gap-2">
              <WingButton size="sm" onClick={() => openApp('about')}>
                about me
              </WingButton>
              <WingButton size="sm" tone="secondary" onClick={() => openApp('projects')}>
                my projects
              </WingButton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}