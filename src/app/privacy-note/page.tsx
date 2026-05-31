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
import { HeaderPage } from '../layout/header-page';
import Circle from '@mui/icons-material/Circle';
import { useState } from 'react';
import { Section } from '../components/shared/section';

const NAV_ITEMS = [
  'Introduction',
  'Information We Collect',
  'How We Use Your Information',
  'Sharing Your Information',
  'Data Security',
  'Data Retention',
  'Your Rights',
  'Cookies and Tracking Technologies',
  'International Data Transfers',
  'Updates to this Privacy Notice',
  'Contact Information',
];

export default function PrivacyNote() {
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
      <HeaderPage />

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
            {NAV_ITEMS.map((item) => (
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
            Privacy Notice
          </Typography>
          <Typography className="py-6" sx={{ fontFamily: "'Inter', sans-serif" }}>
            This privacy policy is designed to deliver transparent,
            straightforward, and easily comprehensible information to all users
            of our website, prospective clients, customers, and recipients of our
            communication services.
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
            title="Introduction"
            content={`Connecta values your privacy and is committed to protecting your personal data. This Privacy Notice explains how we collect, use, and safeguard your information when you use our CPaaS services, including messaging, campaign management, chatbots with AI, flow builders, and contact center solutions across multiple communication channels (e.g., WhatsApp, Line, Telegram, Email, SMS, Instagram Direct Message, Facebook Messenger).`}
          />

          <Box className="mt-6" id="Information We Collect">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Information We Collect
            </Typography>
            <p className="text-base text-[#6D7579] inter mb-2">
              We may collect the following types of information:
            </p>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>
                Personal Data: Includes your name, email address, phone number,
                and other identifying information provided when creating an
                account or using our services.
              </li>
              <li>
                Communication Data: Includes messages sent through our platform,
                logs, and metadata related to communications.
              </li>
              <li>
                Usage Data: Includes details about how you interact with our
                platform, such as access times, pages viewed, and features used.
              </li>
              <li>
                Technical Data: Includes IP address, browser type, operating
                system, and device information.
              </li>
            </ul>
          </Box>

          <Box className="mt-6" id="How We Use Your Information">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              How We Use Your Information
            </Typography>
            <p className="text-base text-[#6D7579] inter mb-2">
              We use your information for the following purposes:
            </p>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>
                To provide and manage our services, including processing
                communications and delivering messages.
              </li>
              <li>
                To improve and optimize the performance and functionality of our
                platform.
              </li>
              <li>
                To ensure security and prevent unauthorized access or misuse of
                our services.
              </li>
              <li>
                To communicate with you regarding updates, support, or
                promotional content, subject to your preferences.
              </li>
              <li>
                To comply with legal obligations and enforce our Terms of Use.
              </li>
            </ul>
          </Box>

          <Box className="mt-6" id="Sharing Your Information">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sharing Your Information
            </Typography>
            <p className="text-base text-[#6D7579] inter mb-2">
              We may share your information under the following circumstances:
            </p>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>
                Service Providers: With trusted third-party vendors who assist in
                delivering our services, such as hosting, analytics, and customer
                support.
              </li>
              <li>
                Legal Obligations: To comply with applicable laws, regulations,
                or legal processes.
              </li>
              <li>
                Business Transactions: In connection with a merger, acquisition,
                or sale of all or a portion of our business.
              </li>
              <li>We do not sell or rent your data to third parties.</li>
            </ul>
          </Box>

          <Section
            title="Data Security"
            content={`We implement industry-standard measures to safeguard your information against unauthorized access, loss, or disclosure. However, no system can guarantee complete security, and you share information at your own risk.`}
          />

          <Section
            title="Data Retention"
            content={`We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Notice or comply with legal obligations.`}
          />

          <Box className="mt-6" id="Your Rights">
            <Typography
              variant="h6"
              className="!mb-4 !font-semibold !text-2xl"
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your Rights
            </Typography>
            <p className="text-base text-[#6D7579] inter mb-2">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="space-y-2 !text-base text-[#6D7579] list-disc list-inside inter">
              <li>Access, correct, or delete your personal data.</li>
              <li>Restrict or object to the processing of your data.</li>
              <li>Port your data to another service provider.</li>
              <li>
                Withdraw your consent for data processing (where applicable).
              </li>
              <li>
                To exercise these rights, contact us at privacy@connecta.id.
              </li>
            </ul>
          </Box>

          <Section
            title="Cookies and Tracking Technologies"
            content={`Our platform may use cookies and similar technologies to enhance user experience and gather usage statistics. You can manage your preferences through your browser settings.`}
          />

          <Section
            title="International Data Transfers"
            content={`If you access our services from outside Indonesia, your data may be transferred to, stored, or processed in a jurisdiction where data protection laws may differ from your own. We ensure appropriate safeguards are in place for such transfers.`}
          />

          <Section
            title="Updates to this Privacy Notice"
            content={`We may update this Privacy Notice periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through our platform or other means.`}
          />

          <Section
            title="Contact Information"
            content={`If you have any questions about this Privacy Notice, please contact us at support@connecta.id.`}
          />
        </Box>
      </Box>
    </>
  );
}
