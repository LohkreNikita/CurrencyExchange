import { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Paper }from '@mui/material';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import './App.css';
import ConversionHistory from './ConversionHistory';
import CurrencyConversion from './CurrencyConversion';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function BasicTabs() {
  const [value, setValue] = useState(1);
  const [conversionHistory, setConversionHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversionHistory'));
    if (storedHistory) {
      setConversionHistory(storedHistory);
    }
  }, []);

  return (
    <div className='tabBar'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      {/* <div className='logo'><FindReplaceIcon className="iconColor"/>Currency <span>Exchange</span> </div> */}
      <Tabs
                    value={value}
                    centered
                    aria-label="wrapped label tabs example"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Tab icon={<FindReplaceIcon className="iconColor"/>} iconPosition="start" label="CurrencyExchange" wrapped style={{
                        width : 300
                    }}/>
                    <Tab label="CURRENCY CONVERTER" wrapped style={{
                        width : 300
                    }} />
                    <Tab label="VIEW CONVERSION HISTORY" wrapped style={{
                        width : 300
                    }} />
                </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>Welcome to Currency Exchange app</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CurrencyConversion  setConversionHistory = {setConversionHistory} conversionHistory = {conversionHistory}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ConversionHistory conversionHistory = {conversionHistory}/>
      </TabPanel>
    </div>
  );
}

