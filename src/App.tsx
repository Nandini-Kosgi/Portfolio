import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  GraduationCap,
  Award,
  FileText,
  Phone,
  ExternalLink,
  Download,
  Upload,
  Briefcase
} from 'lucide-react';
import Navigation from './components/Navigation';
import TypewriterEffect from './components/TypewriterEffect';

function App() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    ) {
      setResumeFile(file);
    } else {
      alert('Please upload a PDF or Word document');
    }
  };

  const handleResumeDownload = () => {
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = resumeFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aew8pps',
        'template_uk9n89i',
        e.target as HTMLFormElement,
        '-djcJ-kHOPuzyLdcC'
      )
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navigation />

      <section id="home" className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">NANDINI KOSGI</h1>
          <div className="flex items-center text-2xl mb-12">
            <span className="mr-2">I'm</span>
            <TypewriterEffect
              words={['Data Analyst', 'Problem Solver', 'Tech Enthusiast']}
              className="text-[#00ff00]"
            />
          </div>
          <div className="flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/nandinikosgi/"
              icon={<Linkedin size={24} />}
            />
            <SocialLink
              href="https://github.com/Nandini-Kosgi"
              icon={<Github size={24} />}
            />
          </div>
        </div>
      </section>

      <section id="about" aria-label="About Me" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="About" icon={<Code />} />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/Photo.jpg"
                alt="My Photo"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 border-2 border-[#00ff00] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
            <div>
              <p className="text-gray-300 mb-6">
                Hi! I'm Nandini Kosgi, a passionate Data Analyst with expertise
                in transforming complex data into actionable insights. I
                specialize in data visualization, statistical analysis, and
                machine learning techniques.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in both technical and analytical
                skills, I help organizations make data-driven decisions that
                drive business growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <InfoItem label="Date of Birth" value="3 November 2000" />
                <InfoItem label="Location" value="Pennsylvania, USA" />
                <InfoItem label="Email" value="nandini.kosgi3@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-[#0a192f]/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Education" icon={<GraduationCap />} />
          <div className="max-w-4xl mx-auto space-y-6">
            <EducationCard
              degree="Master of Science in Data Analytics"
              school="Robert Morris University,Pittsburgh, PA."
              year="2023 - 2025"
              description="Specialized in advanced data analysis and machine learning techniques."
            />
            <EducationCard
              degree="Bachelor of Technology"
              school="VIDYA JYOTHI INSTITUTE OF TECHNOLOGY,Hyderabad,India"
              year="2018 - 2022"
              description="Major in Electronics and Communication Engineering."
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Projects" icon={<Code />} />
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Data Visualization Dashboard"
              description="Interactive dashboard built with Power BI and Streamlit for real-time data analysis."
              tags={['Power BI', 'Python', 'Pandas']}
              link="https://github.com/Nandini-Kosgi/Power-BI"
            />
            <ProjectCard
              title="SMARTER BANKING DECISIONS"
              description="To improve transparency in loan approvals and provide actionable insights that help banks minimize risk and optimize customer relationship strategies."
              tags={['Python', 'Mysql', 'Power BI']}
              link="#"
            />
            <ProjectCard
              title="LIFI BASED AUDIO AND DATA COMMUNICATION"
              description="The main objective of the work is transmitting the different types of data using Light."
              tags={['Arduino', 'Embeded C']}
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-[#0a192f]/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Skills" icon={<Award />} />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCategory
                title="Programming Languages"
                skills={['Python', 'C', 'C++', 'Java', '.Net']}
              />
              <SkillCategory
                title="Databases"
                skills={['MySQL', 'MSSQL', 'Oracle SQL']}
              />
              <SkillCategory
                title="Tools & Technologies"
                skills={[
                  'Git',
                  'Power BI',
                  'Excel',
                  'Power point',
                  'Matlab',
                  'Arduino',
                  'Autocad',
                  'Tableau',
                  'HTML',
                  'CSS',
                  'Java Script',
                  'Generative AI & Prompt Engineer',
                  'Machine Learning'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Resume" icon={<FileText />} />
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <label className="flex items-center gap-2 bg-[#1a2942] text-[#00ff00] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#233554] transition-colors">
                <Upload size={20} /> Upload Resume
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                />
              </label>
              <button
                onClick={handleResumeDownload}
                disabled={!resumeFile}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  resumeFile
                    ? 'bg-[#00ff00] text-[#0a192f] hover:bg-[#00ff00]/90'
                    : 'bg-[#1a2942] text-gray-400 cursor-not-allowed'
                }`}
              >
                <Download size={20} /> Download Resume
              </button>
            </div>
            {resumeFile && (
              <div className="text-center text-gray-300">
                Current resume: {resumeFile.name}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-[#0a192f]/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Experience" icon={<Briefcase />} />
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              title="Software Engineer Trainee"
              company="Cognizant Technology Solutions"
              period="2022 - 2023"
              description="Creating the Application Programming Interfaces according to frontend requirement."
            />
            <ExperienceCard
              title="Full Stack Developer(Internship)"
              company="Cognizant Technology Solutions"
              period="2021 - 2022"
              description="Capable of building an entire web application from scratch and deploying it to production."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#0a192f]/50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Contact" icon={<Phone />} />
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00ff00] transition-colors"
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00ff00] transition-colors"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00ff00] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full bg-[#112240] border border-[#233554] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00ff00] transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#00ff00] text-[#0a192f] py-3 rounded-lg font-medium hover:bg-[#00ff00]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Components (unchanged)
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2942] hover:bg-[#00ff00] hover:text-[#0a192f] transition-colors"
    >
      {icon}
    </a>
  );
}

function SectionTitle({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[#00ff00]">{icon}</span>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}

function EducationCard({ degree, school, year, description }: { degree: string; school: string; year: string; description: string }) {
  return (
    <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#00ff00] transition-colors">
      <h3 className="text-xl font-semibold mb-2">{degree}</h3>
      <p className="text-[#00ff00] mb-2">{school}</p>
      <p className="text-gray-400 text-sm mb-3">{year}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: { title: string; description: string; tags: string[]; link?: string }) {
  return (
    <div className="bg-[#112240] rounded-lg border border-[#233554] hover:border-[#00ff00] transition-colors">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-[#1a2942] text-[#00ff00] px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#00ff00] hover:text-[#00ff00]/80 transition-colors">
            View Project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[#00ff00] text-sm">{label}</span>
      <p className="text-gray-300">{value}</p>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#00ff00] transition-colors">
      <h3 className="text-xl font-semibold mb-4 text-[#00ff00]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="bg-[#1a2942] text-gray-300 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, description }: { title: string; company: string; period: string; description: string }) {
  return (
    <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#00ff00] transition-colors">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-[#00ff00] mb-2">{company}</p>
      <p className="text-gray-400 text-sm mb-3">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;
