import Typography from '@mui/material/Typography';
import Paper, { PaperProps } from '@mui/material/Paper';

// ----------------------------------------------------------------------

interface Props extends PaperProps {
  query?: string;
}

export default function SearchNotFound({ query, sx, ...other }: Props) {
  return query ? (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" gutterBottom>
        Not Found
      </Typography>

      <Typography variant="body2">
        Không tìm thấy bất kỳ sản phẩm nào với tên &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> Hãy kiểm tra lại tên sản phẩm.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      Vui lòng nhập tên sản phẩm
    </Typography>
  );
}
