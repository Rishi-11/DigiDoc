import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Load branding config
const configPath = path.join(rootDir, 'branding.config.json');
if (!fs.existsSync(configPath)) {
  console.error('branding.config.json not found!');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const replacements = [
  { from: /PDFCraft/g, to: config.name },
  { from: /pdfcraft/g, to: config.name.toLowerCase() },
  { from: /Professional PDF Tools - Free, Private & Browser-Based\. Merge, split, compress, convert, and edit PDF files online without uploading to servers\./g, to: config.description },
  { from: /https:\/\/pdfcraft\.devtoolcafe\.com/g, to: config.url },
  { from: /https:\/\/github\.com\/PDFCraftTool\/pdfcraft/g, to: config.github },
  { from: /https:\/\/twitter\.com\/pdfcraft/g, to: config.twitter },
  { from: /PDFCraft Team/g, to: config.creator },
];

const filesToProcess = [
  'src/config/site.ts',
  'package.json',
  'src-tauri/tauri.conf.json',
  'README.md',
  'Dockerfile',
  'docker-compose.yml',
  'nginx.conf',
  'public/sw.js',
  '.htaccess',
  'DEPLOYMENT.md'
];

// Process individual files
filesToProcess.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});

// Process all translation files in messages/
const messagesDir = path.join(rootDir, 'messages');
if (fs.existsSync(messagesDir)) {
  const translationFiles = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));
  translationFiles.forEach(file => {
    const filePath = path.join(messagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated message file: ${file}`);
  });
}

// Update Colors in globals.css
const globalsCssPath = path.join(rootDir, 'src/app/globals.css');
if (fs.existsSync(globalsCssPath)) {
  let content = fs.readFileSync(globalsCssPath, 'utf8');
  
  // Replace primary color
  content = content.replace(/--color-primary: \d+ \d+% \d+%;/, `--color-primary: ${config.colors.primary};`);
  // Replace accent color
  content = content.replace(/--color-accent: \d+ \d+% \d+%;/, `--color-accent: ${config.colors.accent};`);
  
  fs.writeFileSync(globalsCssPath, content);
  console.log('Updated: src/app/globals.css (Colors)');
}

console.log(`\nRebranding to "${config.name}" complete!`);
