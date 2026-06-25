const fs = require('fs');
const path = require('path');

const termsMd = fs.readFileSync('c:/FLUENT-Co/legal/web/terms-of-service.md', 'utf8');
const privacyMd = fs.readFileSync('c:/FLUENT-Co/legal/web/privacy-policy.md', 'utf8');

function mdToSections(md) {
  const sections = [];
  const lines = md.split('\n');
  let currentSection = null;
  let currentDesc = [];
  
  for (let line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) {
        currentSection.desc = currentDesc.join('\n');
        sections.push(currentSection);
      }
      currentSection = { title: line.replace('## ', '').trim(), id: '', desc: '' };
      currentSection.id = currentSection.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      currentDesc = [];
    } else if (currentSection && !line.startsWith('---') && !line.startsWith('<div') && !line.startsWith('</div')) {
      currentDesc.push(line);
    }
  }
  if (currentSection) {
    currentSection.desc = currentDesc.join('\n');
    sections.push(currentSection);
  }
  return sections;
}

const termsSections = mdToSections(termsMd);
const privacySections = mdToSections(privacyMd);

function formatReactContent(desc) {
  let html = desc.trim();
  const parts = html.split('### ');
  if (parts.length === 1) {
    const paragraphs = parts[0].split('\n\n').filter(p => p.trim());
    return '<div className="flex flex-col gap-3 font-sans">\n' + paragraphs.map(p => {
      if (p.startsWith('* ')) {
        return '<ul className="list-disc pl-5">' + p.split('\n').filter(l => l.trim()).map(l => '<li>' + l.replace('* ', '') + '</li>').join('') + '</ul>';
      }
      return '<p>' + p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</p>';
    }).join('\n') + '\n</div>';
  } else {
    let result = '<div className="flex flex-col gap-8 font-sans">\n';
    if (parts[0].trim()) {
      const paragraphs = parts[0].split('\n\n').filter(p => p.trim());
      result += paragraphs.map(p => '<p>' + p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</p>').join('\n') + '\n';
    }
    for (let i = 1; i < parts.length; i++) {
      const subparts = parts[i].split('\n');
      const subtitle = subparts[0].trim();
      const body = subparts.slice(1).join('\n').trim();
      const paragraphs = body.split('\n\n').filter(p => p.trim());
      result += '<div>\n<h4 className="font-semibold text-brand-blue dark:text-luxury-white mb-2 text-base">' + subtitle + '</h4>\n';
      result += paragraphs.map(p => {
        if (p.startsWith('* ')) {
          return '<ul className="list-disc pl-5">' + p.split('\n').filter(l => l.trim()).map(l => '<li>' + l.replace('* ', '') + '</li>').join('') + '</ul>';
        }
        return '<p>' + p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</p>';
      }).join('\n') + '\n</div>\n';
    }
    result += '</div>';
    return result;
  }
}

let termsTsx = fs.readFileSync('c:/Rheole Web page/website/app/terms/page.tsx', 'utf8');
let privacyTsx = fs.readFileSync('c:/Rheole Web page/website/app/privacy/page.tsx', 'utf8');

const newTermsSectionsCode = 'const sections: TermsSection[] = [\n' + termsSections.map(s => {
  return '    {\n      id: "' + s.id + '",\n      title: "' + s.title + '",\n      desc: (\n        ' + formatReactContent(s.desc).split('\n').join('\n        ') + '\n      )\n    }';
}).join(',\n') + '\n  ];';

const newPrivacySectionsCode = 'const sections: PrivacySection[] = [\n' + privacySections.map(s => {
  return '    {\n      id: "' + s.id + '",\n      title: "' + s.title + '",\n      desc: (\n        ' + formatReactContent(s.desc).split('\n').join('\n        ') + '\n      )\n    }';
}).join(',\n') + '\n  ];';

termsTsx = termsTsx.replace(/const sections: TermsSection\[\] = \[[\s\S]*?\];\n\n  const glossary/, newTermsSectionsCode + '\n\n  const glossary');
privacyTsx = privacyTsx.replace(/const sections: PrivacySection\[\] = \[[\s\S]*?\];\n\n  const glossary/, newPrivacySectionsCode + '\n\n  const glossary');

fs.writeFileSync('c:/Rheole Web page/website/app/terms/page.tsx', termsTsx);
fs.writeFileSync('c:/Rheole Web page/website/app/privacy/page.tsx', privacyTsx);
console.log('Successfully updated the TSX files with new content.');
