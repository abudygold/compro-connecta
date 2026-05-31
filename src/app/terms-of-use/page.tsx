'use client';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Header } from '../layout/header';
import Circle from '@mui/icons-material/Circle';
import { useState } from 'react';
import { Section } from '../components/shared/section';

const NAV_ITEMS = [
  'Acceptance of Terms',
  'Description of Services',
  'Eligibility',
  'User Responsibility',
  'Prohibited Uses',
  'Data Privacy',
  'Service Availability',
  'Fees and Payment',
  'Intellectual Property',
  'Limitation of Liability',
  'Indemnification',
  'Changes to Terms',
  'Governing Law',
  'Contact Information',
];

export default function TermsOfUse() {
  const [navSelected, setNavSelected] = useState(NAV_ITEMS[0]);

  const handleNavClick = (id: string) => {
    setNavSelected(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header />

      <Box className="flex flex-col gap-10 p-6 md:lg:p-10 md:lg:flex-row">
        {/* Sidebar */}
        <Box
          className="md:lg:w-64 p-4 rounded-3xl border border-[#DBE0E3]"
          sx={{
            position: { md: 'sticky', lg: 'sticky' },
            top: { md: 32, lg: 32 },
            alignSelf: { md: 'flex-start', lg: 'flex-start' },
          }}
        >
          <Typography
            variant="h6"
            className="mb-4 !font-semibold"
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Content
          </Typography>
          <List dense>
            {NAV_ITEMS.map(item => (
              <ListItem key={item} className="px-0 py-1 text-[#6D7579]">
                <ListItemIcon className="!min-w-auto mr-2">
                  <Circle className="!text-[6px]" />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  onClick={() => handleNavClick(item)}
                  className="cursor-pointer"
                  sx={{
                    '.MuiTypography-root': {
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: navSelected === item ? 700 : 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box className="md:lg:flex-1">
          <Typography
            variant="h4"
            className="mb-2 !font-semibold"
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Terms Of Use
          </Typography>
          <Typography
            className="py-6"
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Thank you for visiting our Site! We look forward to doing business
            with you. Here are some Do&apos;s and Don&apos;ts about our Site.
          </Typography>

          <Divider />

          <Typography
            variant="body2"
            className="py-6 mb-4 text-gray-600"
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last Updated: <strong>16 January 2025</strong>
          </Typography>

          <Section
            title="Acceptance of Terms"
            content={`By accessing or using Connecta's CPaaS platform ("Services"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not use the Services.`}
          />

          <Section
            title="Description of Services"
            content={`Connecta provides communication services such as single and bulk messaging, AI-powered chatbots, flow builders, campaign management, and contact center solutions across various channels, including WhatsApp, Line, Telegram, Email, SMS, Instagram Direct Message, and Facebook Messenger.`}
          />

          <Section
            title="Eligibility"
            content={`18 years old or the age of majority in your jurisdiction to use our Services. By using Connecta, you confirm that you meet these eligibility requirements.`}
          />

          <Box className="mt-6" id="User Responsibility">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              User Responsibility
            </Typography>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>
                Ensure that your use of the Services complies with all
                applicable laws and regulations.
              </li>
              <li>
                Do not use the Services for illegal, fraudulent, or harmful
                activities, including spamming or harassment.
              </li>
              <li>
                Maintain the confidentiality of your account credentials and
                notify Connecta immediately if you suspect unauthorized access.
              </li>
            </ul>
          </Box>

          <Box className="mt-6" id="Prohibited Uses">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Prohibited Uses
            </Typography>
            <p className="text-base text-[#6D7579] inter mb-2">
              You agree not to:
            </p>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>
                Violate the intellectual property rights of Connecta or any
                third party.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services.
              </li>
              <li>
                Reverse engineer or attempt to extract the source code of any
                software associated with the Services.
              </li>
            </ul>
          </Box>

          <Section
            title="Data Privacy"
            content={`Connecta values your privacy and handles user data in accordance with our Privacy Policy. By using our Services, you consent to the collection and use of your data as outlined in the Privacy Policy.`}
          />

          <Section
            title="Service Availability"
            content={`Connecta strives to maintain the availability and performance of the Services but does not guarantee uninterrupted access. We reserve the right to modify or discontinue the Services at any time, with or without notice.`}
          />

          <Section
            title="Fees and Payment"
            content={`Use of certain features or services may be subject to fees. You agree to pay all applicable charges and understand that non-payment may result in suspension or termination of your account.`}
          />

          <Section
            title="Intellectual Property"
            content={`All intellectual property rights in the Services, including software, designs, and content, belong to Connecta or its licensors. You are granted a limited, non-exclusive license to use the Services solely for their intended purposes.`}
          />

          <Section
            title="Limitation of Liability"
            content={`To the fullest extent permitted by law, Connecta shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services.`}
          />

          <Section
            title="Indemnification"
            content={`You agree to indemnify and hold Connecta harmless from any claims, losses, or damages resulting from your violation of these Terms or misuse of the Services.`}
          />

          <Section
            title="Changes to Terms"
            content={`Connecta reserves the right to modify these Terms at any time. Continued use of the Services after changes have been posted constitutes your acceptance of the revised Terms.`}
          />

          <Section
            title="Governing Law"
            content={`These Terms shall be governed by and construed in accordance with the laws of Indonesia. Any disputes arising from these Terms shall be resolved in the courts of Indonesia.`}
          />

          <Section
            title="Contact Information"
            content={`If you have any questions about these Terms, please contact us at support@connecta.id.`}
          />
        </Box>
      </Box>
    </>
  );
}
