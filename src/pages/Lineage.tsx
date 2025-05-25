import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Lineage.scss';
import { Tree, TreeNode } from 'react-organizational-chart';
import Sunburst from 'sunburst-chart';

interface GuruInfo {
  id: string;
  translationKey: string;
  image: string;
}

const guruLineage: GuruInfo[] = [
  {
    id: 'adiShankara',
    translationKey: 'lineage.gurus.adiShankara',
    image: "/images/lineage/shankara.jpg"
  },
  {
    id: 'brahmananda',
    translationKey: 'lineage.gurus.brahmananda',
    image: "/images/lineage/brahmananda.jpg"
  },
  {
    id: 'shantanand',
    translationKey: 'lineage.gurus.shantanand',
    image: "/images/lineage/shantanand.jpg"
  },
  {
    id: 'swaroopanand',
    translationKey: 'lineage.gurus.swaroopanand',
    image: "/images/lineage/swaroopanand.jpg"
  }
];

// Define interface for hierarchy node
interface HierarchyNode {
  name: string;
  value?: number;
  children?: HierarchyNode[];
}

const hierarchyData: HierarchyNode = {
  name: 'श्री श्री १००८ श्री दण्डी स्वामी श्री ओंकार आश्रम',
  children: [
    {
      name: '1. श्री दण्डी स्वामी श्री माधो आश्रम',
      children: [
        {
          name: 'श्री दण्डीस्वामी श्री पूर्ण आश्रम',
          children: [
            { name: 'श्री दण्डी स्वामी श्री राजेश्वर आश्रम', value: 1 },
            { name: 'श्री दण्डी स्वामी श्री निर्मय आश्रम', value: 1 },
            { name: 'श्री दण्डी स्वामी श्री वैद्य जी आश्रम', value: 1 },
          ],
        },
        {
          name: 'श्री दण्डीस्वामी श्री रामबोध आश्रम',
          children: [
            { name: 'श्री दण्डी स्वामी श्री गंगा आश्रम टोडी में मन्दिर बनाया', value: 1 },
            { name: 'श्री दण्डी स्वामी श्री हलधर आश्रम', value: 1 },
            { name: 'श्री दण्डी स्वामी श्री हरिहर आश्रम', value: 1 },
            { name: 'श्री दण्डी स्वामी श्री राघव आश्रम', value: 1 },
          ],
        },
        { name: 'श्री दण्डीस्वामी श्री अमर आश्रम', value: 1 },
        { name: 'श्री दण्डीस्वामी श्री जगन्नाथ आश्रम', value: 1 },
      ],
    },
    { name: '2. श्री दण्डी स्वामी श्री विश्वेश्वर आश्रम', value: 1 },
    { name: '3. प्रबंधक श्री श्री १००८ श्री दण्डी स्वामी श्री चन्द्रशेखर आश्रम', value: 1 },
  ],
};

// Function to calculate sum of children values recursively
function calculateNodeValue(node: HierarchyNode): number {
  if (node.children) {
    node.value = node.children.reduce((sum: number, child: HierarchyNode) => sum + calculateNodeValue(child), 0);
  } else {
    // Leaf nodes already have a value of 1
    node.value = node.value || 1;
  }
  return node.value;
}

// Calculate values for the hierarchy data
calculateNodeValue(hierarchyData);

const Lineage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const chartContainer = document.getElementById('sunburst-chart-container');
    if (chartContainer) {
      // Clear existing chart content before rendering
      chartContainer.innerHTML = '';

      // Define a color scale based on hierarchy depth using Sanatan Dharma-inspired colors and theme colors
      const colors = [
        '#FF7F27', // Primary color (Orange) - Depth 0 (Root)
        '#F9BB4D', // Maximum Yellow Red - Depth 1
        '#C0322E', // Golden Gate Bridge Orange (Reddish) - Depth 2
        '#0A4097', // Yale Blue - Depth 3
        '#EED062', // Arylide Yellow - Depth 4
        '#F77B4D', // Mandarin (Orange) - Depth 5
        '#A0AEC0', // A shade of gray from theme for variety - Depth 6
        '#718096', // Another shade of gray - Depth 7
      ];

      // Initialize chart with a small delay to avoid potential rendering issues
      const initializeChart = () => {
        const chart = new Sunburst(chartContainer)
          .data(hierarchyData)
          .size('value')
          .label('name')
          .tooltipTitle(d => d.name || '')
          .color(d => {
            // Ensure depth is within bounds and cycle through colors
            const depth = d.depth || 0; // Default to 0 if depth is undefined
            return colors[depth % colors.length];
          })
          .transitionDuration(0); // Disable transitions to avoid potential errors

        // Optional: Add resize handling for the chart if the library supports it
        // window.addEventListener('resize', chart.resize); // Check library documentation
      };

      const timeoutId = setTimeout(initializeChart, 50); // Small delay (e.g., 50ms)

      // Cleanup function to remove the chart and clear timeout
      return () => {
        clearTimeout(timeoutId);
        chartContainer.innerHTML = '';
      };
    }
  }, [hierarchyData]); // Re-run effect if hierarchyData changes (though it's static here)

  return (
    <div className="lineage-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('lineage.title')}</h1>
            <p className="subtitle">{t('lineage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>{t('lineage.introduction.title')}</h2>
            <p>{t('lineage.introduction.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section replaced with Hierarchy Section */}
      <section className="hierarchy-section">
        <div className="container">
          <div className="org-chart-wrapper">
            <Tree
              lineWidth={'2px'}
              lineColor={'#e74c3c'}
              lineBorderRadius={'10px'}
              label={<div className="org-node org-node-main">
                श्री श्री १००८ श्री दण्डी स्वामी श्री ओंकार आश्रम<br/>
                <span style={{ fontSize: '1rem', color: '#222' }}>बुजघाट गढ़मुक्तेश्वर हापुड़ उ.प्र. भारत 245205</span><br/>
                <span style={{ fontSize: '1rem', color: '#222' }}>मो: 9897507465, 8755814857</span>
              </div>}
            >
              <TreeNode label={<div className="org-node org-node-main">
                श्री श्री १००८ श्री दण्डी स्वामी श्री ओंकार आश्रम
              </div>}>
                <TreeNode label={<div className="org-node org-node-branch">1. श्री दण्डी स्वामी श्री माधो आश्रम</div>}>
                  <TreeNode label={<div className="org-node org-node-sub">श्री दण्डीस्वामी श्री पूर्ण आश्रम</div>}>
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री राजेश्वर आश्रम</div>} />
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री निर्मय आश्रम</div>} />
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री वैद्य जी आश्रम</div>} />
                  </TreeNode>
                  <TreeNode label={<div className="org-node org-node-sub">श्री दण्डीस्वामी श्री रामबोध आश्रम</div>}>
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री गंगा आश्रम टोडी में मन्दिर बनाया</div>} />
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री हलधर आश्रम</div>} />
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री हरिहर आश्रम</div>} />
                    <TreeNode label={<div className="org-node org-node-leaf">श्री दण्डी स्वामी श्री राघव आश्रम</div>} />
                  </TreeNode>
                  <TreeNode label={<div className="org-node org-node-sub">श्री दण्डीस्वामी श्री अमर आश्रम</div>} />
                  <TreeNode label={<div className="org-node org-node-sub">श्री दण्डीस्वामी श्री जगन्नाथ आश्रम</div>} />
                </TreeNode>
                <TreeNode label={<div className="org-node org-node-branch">2. श्री दण्डी स्वामी श्री विश्वेश्वर आश्रम</div>} />
                <TreeNode label={<div className="org-node org-node-branch">3. प्रबंधक श्री श्री १००८ श्री दण्डी स्वामी श्री चन्द्रशेखर आश्रम</div>} />
              </TreeNode>
            </Tree>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('lineage.legacy.title')}</h2>
            <p>{t('lineage.legacy.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Circular Hierarchy Section (Sunburst) */}
      <section className="circular-hierarchy-section">
        <div className="container">
          <h2>Circular Hierarchy (Sunburst)</h2> {/* You can translate this title */}
          <div id="sunburst-chart-container"></div> {/* Container for the chart */}
        </div>
      </section>

    </div>
  );
};

export default Lineage; 