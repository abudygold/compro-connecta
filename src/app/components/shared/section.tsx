import { Box, Typography } from '@mui/material';

interface SectionProps {
  title: string;
  content: string;
}

export function Section({ title, content }: SectionProps) {
  return (
    <Box className="mt-6" id={title}>
      <Typography
        variant="h6"
        className="!mb-4 !font-semibold !text-2xl"
        sx={{ fontFamily: "'Inter', sans-serif" }}
      >
        {title}
      </Typography>
      <Typography
        className="!text-base text-[#6D7579]"
        sx={{ fontFamily: "'Inter', sans-serif" }}
      >
        {content}
      </Typography>
    </Box>
  );
}
