import { useOrganization, useSession, useUser } from 'vue-clerk'

const Row = defineComponent(
  (props: { desc: string; value: string }, { slots }) => {
    return () => (
      <div class="tw-h-[2.125rem] tw-grid tw-grid-cols-2 tw-items-center tw-relative">
        <span class="tw-text-xs tw-font-semibold tw-block tw-flex-shrink-0">
          {props.desc}
        </span>
        <span class="tw-text-xs tw-text-[#7D7D7E] tw-font-mono tw-block tw-relative">
          <span class="tw-block tw-truncate tw-w-full">{props.value}</span>
          {slots.default?.()}
        </span>
      </div>
    )
  },
  {
    props: ['desc', 'value']
  }
)

const PointerC = defineComponent(
  (props: { label: string }) => {
    return () => (
      <div class="tw-absolute tw-w-fit tw-flex tw-items-center tw-gap-5 tw-top-1/2 -tw-translate-y-1/2 tw-left-full">
        <div class="tw-relative">
          <div class="tw-h-px tw-bg-[#BFBFC4] tw-w-[6.5rem]" />
          <div class="tw-size-1 tw-bg-[#BFBFC4] tw-rotate-45 tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2" />
        </div>
        <div class="tw-font-mono tw-text-xs tw-bg-black tw-px-1.5 tw-py-1 tw-rounded-md tw-text-white">
          {props.label}
        </div>
      </div>
    )
  },
  {
    props: ['label']
  }
)

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function formatDateWithNumbers(date: Date): string {
  return date.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
}

const UserDetails = defineComponent(() => {
  const { user } = useUser()
  const { session } = useSession()
  const { organization } = useOrganization()
  return () =>
    user.value && session.value ? (
      <div class="tw-p-16 tw-rounded-lg tw-border tw-border-[#EDEDED] tw-bg-[#F1F1F2] tw-background tw-relative">
        <div class="tw-p-8 tw-rounded-xl tw-bg-white tw-shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] tw-ring-1 tw-ring-gray-950/5 tw-max-w-[25rem]">
          <div class="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-mb-6">
            <div class="tw-w-full tw-relative tw-flex tw-justify-center">
              <img
                src={user.value.imageUrl}
                class="tw-size-20 tw-rounded-full"
              />
              <div class="tw-absolute tw-w-fit tw-flex tw-items-center tw-gap-5 top-1/2 -tw-translate-x-2.5 -tw-translate-y-1/2 tw-left-full">
                <div class="tw-relative">
                  <div class="tw-h-px tw-bg-[#BFBFC4] tw-w-[6.5rem]" />
                  <div class="tw-size-1 tw-bg-[#BFBFC4] tw-rotate-45 tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2" />
                </div>
                <div class="tw-font-mono tw-text-xs tw-bg-black tw-px-1.5 tw-py-1 tw-rounded-md tw-text-white">
                  user.imageUrl
                </div>
              </div>
            </div>
            {user.value.firstName && user.value.lastName ? (
              <h1 class="tw-text-[1.0625rem] tw-font-semibold tw-relative tw-w-full tw-text-center">
                {user.value.firstName} {user.value.lastName}
                <div class="tw-absolute tw-w-fit tw-flex tw-items-center tw-gap-5 tw-top-1/2 -tw-translate-x-2.5 -tw-translate-y-1/2 tw-left-full">
                  <div class="tw-relative">
                    <div class="tw-h-px tw-bg-[#BFBFC4] tw-w-[6.5rem]" />
                    <div class="tw-size-1 tw-bg-[#BFBFC4] tw-rotate-45 tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2" />
                  </div>
                  <div class="tw-font-mono tw-text-xs tw-bg-black tw-px-1.5 tw-py-1 tw-rounded-md tw-text-white">
                    user.firstName
                  </div>
                  <div class="tw-font-mono tw-text-xs tw-bg-black tw-px-1.5 tw-py-1 tw-rounded-md tw-text-white -tw-translate-x-3">
                    user.lastName
                  </div>
                </div>
              </h1>
            ) : (
              <div class="tw-h-4" />
            )}
          </div>

          <div class="tw-px-2.5 tw-bg-[#FAFAFB] tw-rounded-lg tw-divide-y tw-divide-[#EEEEF0]">
            <Row desc="Email" value={user.value.emailAddresses[0].emailAddress}>
              <PointerC label="user.emailAddresses[0].emailAddress" />
            </Row>
            <Row
              desc="Last signed in"
              value={formatDate(user.value.lastSignInAt!)}
            >
              <PointerC label="user.lastSignInAt" />
            </Row>
            <Row desc="Joined on" value={formatDate(user.value.createdAt!)}>
              <PointerC label="user.createdAt" />
            </Row>
            <Row desc="User ID" value={user.value.id}>
              <PointerC label="user.user.id" />
            </Row>
          </div>
          <h2 class="tw-mt-6 tw-mb-4 tw-text-[0.9375rem] tw-font-semibold">
            Session details
          </h2>
          <div class="tw-px-2.5 tw-bg-[#FAFAFB] tw-rounded-lg tw-divide-y tw-divide-[#EEEEF0]">
            <Row desc="Session ID" value={session.value.id}>
              <PointerC label="session.id" />
            </Row>
            <Row desc="Status" value={session.value.status}>
              <PointerC label="session.status" />
            </Row>
            <Row
              desc="Last active"
              value={formatDateWithNumbers(session.value.lastActiveAt)}
            >
              <PointerC label="session.lastActiveAt" />
            </Row>
            <Row
              desc="Session expiration"
              value={formatDateWithNumbers(session.value.expireAt)}
            >
              <PointerC label="session.expireAt" />
            </Row>
          </div>
          {organization.value ? (
            <>
              <h2 class="tw-mt-6 tw-mb-4 tw-text-[0.9375rem] tw-font-semibold">
                Organization detail
              </h2>
              <div class="tw-px-2.5 tw-bg-[#FAFAFB] tw-rounded-lg tw-divide-y tw-divide-[#EEEEF0]">
                <Row desc="Organization ID" value={organization.value.id}>
                  <PointerC label="organization.id" />
                </Row>
                <Row desc="Name" value={organization.value.name}>
                  <PointerC label="organization.name" />
                </Row>
                <Row
                  desc="Members"
                  value={String(organization.value.membersCount)}
                >
                  <PointerC label="organization.membersCount" />
                </Row>
                <Row
                  desc="Pending invitations"
                  value={String(organization.value.pendingInvitationsCount)}
                >
                  <PointerC label="organization.pendingInvitationsCount" />
                </Row>
              </div>
            </>
          ) : null}
        </div>
      </div>
    ) : null
})

export default UserDetails
