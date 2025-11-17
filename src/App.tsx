import { useState } from 'react';
import { BookOpen, Cpu, Zap, Brain, Database, GitBranch } from 'lucide-react';

const StudyGuide = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeSubsection, setActiveSubsection] = useState<string | null>(null);

  const sections = [
    {
      id: 'intro',
      title: 'Introduction to Microprocessors',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-blue-500',
      subsections: [
        {
          id: 'basics',
          title: 'What is a Microprocessor?',
          content: (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-2">Definition</h4>
                <p className="mb-2">"Micro" = small + "Processor" = processing function</p>
                <p className="font-semibold">A single IC that serves as a CPU on a chip</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-3">Key Functions:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-green-100 p-3 rounded text-center">
                    <div className="font-bold">1. ACCEPTS</div>
                    <div className="text-sm">Digital (binary) data</div>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded text-center">
                    <div className="font-bold">2. PROCESSES</div>
                    <div className="text-sm">According to instructions</div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded text-center">
                    <div className="font-bold">3. OUTPUTS</div>
                    <div className="text-sm">The results</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Inside a Microprocessor:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Millions of miniaturized <strong>transistors</strong></li>
                  <li>Combines <strong>combinational logic</strong> and <strong>sequential logic</strong></li>
                  <li>Integrated logic circuits for arithmetic, control, and data storage</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold mb-2">What is a Transistor?</h4>
                <p className="text-sm">A crucial semiconductor device that controls electrical current flow. It's the building block of electronic circuits for processing and storing information.</p>
              </div>
            </div>
          )
        },
        {
          id: 'vs',
          title: 'Microprocessor vs Microcontroller',
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">MICROPROCESSOR</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Processor on a chip</li>
                    <li>✓ Used for digital signal processing</li>
                    <li>✓ Single processor on chip</li>
                    <li>✓ Examples: Intel Core i7, AMD Ryzen</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
                  <h4 className="font-bold text-lg mb-3 text-green-800">MICROCONTROLLER</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Computer-on-a-chip</li>
                    <li>✓ Optimized to control electronic devices</li>
                    <li>✓ Includes: Microprocessor + Memory + I/O</li>
                    <li>✓ Examples: Arduino, ARM Cortex-M</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'history',
          title: 'Evolution & History',
          content: (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Timeline of Microprocessors</h4>
                <div className="space-y-3">
                  {[
                    { year: '1968', event: 'Term "microprocessor" first used' },
                    { year: '1971', event: 'Intel 4004 - First 4-bit microprocessor', specs: '740kHz, 2300 transistors, 60k instructions/sec' },
                    { year: '1972', event: 'Intel 8008 - 8-bit microprocessor', specs: '500kHz, 50k instructions/sec' },
                    { year: '1974', event: 'Intel 8080', specs: '2MHz, 6000 transistors, 500k instructions/sec' },
                    { year: '1976', event: 'Intel 8085', specs: '3MHz, 6500 transistors, 769k instructions/sec' },
                    { year: '1978', event: 'Intel 8086 - 16-bit', specs: '4.77-10MHz, 29k transistors, 16-bit data bus, 20-bit address bus' },
                    { year: '1985', event: 'Intel i386 - 32-bit' },
                    { year: '2000s', event: 'Intel Core series - 64-bit, millions of transistors, multi-core' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3 rounded shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500 text-white px-3 py-1 rounded font-bold text-sm">{item.year}</div>
                        <div className="flex-1">
                          <div className="font-semibold">{item.event}</div>
                          {item.specs && <div className="text-xs text-gray-600 mt-1">{item.specs}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'types',
          title: 'Types of Microprocessors',
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg border-2 border-indigo-500">
                  <h4 className="font-bold text-lg mb-2">General Purpose Processor (GPP)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Not specialized for specific application</li>
                    <li>• High flexibility</li>
                    <li>• Reprogrammable</li>
                    <li>• Example: Intel Core series</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-500">
                  <h4 className="font-bold text-lg mb-2">Application-Specific Processor (ASP)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Designed for specific tasks</li>
                    <li>• High efficiency</li>
                    <li>• Optimized performance</li>
                    <li>• Examples: DSP, GPU</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Microprocessor Architecture',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-green-500',
      subsections: [
        {
          id: 'components',
          title: 'Core Components',
          content: (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold mb-2">Architecture Definition:</h4>
                <p className="text-sm">The internal organization and design of a microprocessor that defines how it processes data, controls instructions, and interfaces with memory and peripherals.</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-blue-600">1. ALU (Arithmetic Logic Unit)</h4>
                  <p className="text-sm mb-2">The "computing brain" of the microprocessor</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-sm mb-1">Performs:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Arithmetic: +, -, ×, ÷</li>
                      <li>• Logical: AND, OR, NOT, XOR, comparisons</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-purple-600">2. Control Unit (CU)</h4>
                  <p className="text-sm mb-2">Directs the operation of the processor</p>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-sm mb-1">Responsibilities:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Fetching instructions from memory</li>
                      <li>• Decoding instructions</li>
                      <li>• Generating control signals</li>
                      <li>• Acts like a traffic controller</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-orange-600">3. Register Array</h4>
                  <p className="text-sm mb-2">Temporary storage for data, instructions, and addresses</p>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-sm mb-2">Types of Registers:</div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="bg-white p-2 rounded"><strong>Accumulator (ACC):</strong> Stores temporary results</div>
                      <div className="bg-white p-2 rounded"><strong>General Purpose:</strong> For variety of purposes</div>
                      <div className="bg-white p-2 rounded"><strong>Instruction Register (IR):</strong> Stores next instruction</div>
                      <div className="bg-white p-2 rounded"><strong>Program Counter (PC):</strong> Holds address of next instruction</div>
                      <div className="bg-white p-2 rounded"><strong>Stack Pointer (SP):</strong> Maintains stack in memory</div>
                      <div className="bg-white p-2 rounded"><strong>Status Register:</strong> Provides condition flags</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-red-600">4. Buses</h4>
                  <p className="text-sm mb-2">Transfer data, addresses, and control signals</p>
                  <div className="space-y-2">
                    <div className="bg-red-50 p-2 rounded text-sm">
                      <strong>Data Bus:</strong> Carries data between processor, memory, I/O
                    </div>
                    <div className="bg-yellow-50 p-2 rounded text-sm">
                      <strong>Address Bus:</strong> Carries addresses of memory/I/O locations
                    </div>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <strong>Control Bus:</strong> Carries control signals (read/write, interrupts)
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-teal-600">5. Clock</h4>
                  <p className="text-sm mb-2">Speed at which microprocessor executes instructions</p>
                  <div className="bg-teal-50 p-3 rounded text-sm">
                    <p>• Measured in MHz (megahertz) or GHz (gigahertz)</p>
                    <p>• CPU requires fixed clock cycles to execute each instruction</p>
                    <p>• Faster clock = more instructions per second</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-indigo-600">6. Cache Memory</h4>
                  <p className="text-sm mb-2">Very fast memory near CPU</p>
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="space-y-1 text-sm">
                      <div><strong>L1 Cache:</strong> Smallest, fastest, closest to core</div>
                      <div><strong>L2 Cache:</strong> Larger, slightly slower</div>
                      <div><strong>L3 Cache:</strong> Largest, shared among cores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'registers',
          title: 'Register Sizes',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-3">Register Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-2 text-left">Feature</th>
                        <th className="p-2 text-left">8-bit</th>
                        <th className="p-2 text-left">16-bit</th>
                        <th className="p-2 text-left">32-bit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Data capacity</td>
                        <td className="p-2">1 byte</td>
                        <td className="p-2">2 bytes</td>
                        <td className="p-2">4 bytes</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-2 font-semibold">Max unsigned value</td>
                        <td className="p-2">255</td>
                        <td className="p-2">65,535</td>
                        <td className="p-2">4,294,967,295</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Addressing limit</td>
                        <td className="p-2">Limited</td>
                        <td className="p-2">~64 KB</td>
                        <td className="p-2">4 GB</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-2 font-semibold">Usage</td>
                        <td className="p-2">Small operands</td>
                        <td className="p-2">Moderate data</td>
                        <td className="p-2">Large data, complex ops</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'memory',
      title: 'Memory & Processor',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-purple-500',
      subsections: [
        {
          id: 'memory-types',
          title: 'Types of Memory',
          content: (
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold mb-2">What is Memory?</h4>
                <p className="text-sm">Storage units used to hold data and instructions temporarily or permanently during processing.</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-blue-600">Primary Memory (Main Memory)</h4>
                  <div className="bg-blue-50 p-3 rounded mb-2">
                    <p className="text-sm font-semibold">Characteristics:</p>
                    <p className="text-sm">• Directly accessible by processor</p>
                    <p className="text-sm">• Volatile: Loses data when power is off</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-green-100 p-2 rounded text-sm">
                      <strong>RAM (Random Access Memory):</strong> Stores data and instructions currently being executed
                    </div>
                    <div className="bg-yellow-100 p-2 rounded text-sm">
                      <strong>Cache Memory:</strong> Very fast, small memory for frequently accessed data
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-orange-600">Secondary Memory</h4>
                  <div className="bg-orange-50 p-3 rounded mb-2">
                    <p className="text-sm font-semibold">Characteristics:</p>
                    <p className="text-sm">• Used for permanent storage</p>
                    <p className="text-sm">• Non-volatile: Retains data when power is off</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-100 p-2 rounded">Examples: Hard drives (HDD), Solid-state drives (SSD), Optical discs</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-red-600">ROM (Read-Only Memory)</h4>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-sm">• Non-volatile</p>
                    <p className="text-sm">• Stores firmware or boot instructions</p>
                    <p className="text-sm">• Contents fixed at manufacturing or programmable (PROM, EPROM)</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'operation',
      title: 'Microprocessor Operation',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-yellow-500',
      subsections: [
        {
          id: 'instructions',
          title: 'Instructions & ISA',
          content: (
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2">What are Instructions?</h4>
                <p className="text-sm">Basic commands or operations that a processor can execute directly. They tell the processor what to do step by step.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Examples (Assembly Language):</h4>
                <div className="space-y-2 font-mono text-sm bg-gray-900 text-green-400 p-3 rounded">
                  <div>ADD AX, BX → Add contents of AX and BX, store in AX</div>
                  <div>CMP AX, 5 → Compare contents of AX with 5</div>
                  <div>JE 16 → Jump to instruction at offset 16 if equal</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-800">Instruction Set Architecture (ISA)</h4>
                <p className="text-sm mb-2">The set of basic instructions and rules that define how a processor operates.</p>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-semibold mb-1">Current Architectures:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-blue-100 p-2 rounded">IA32 (x86)</div>
                    <div className="bg-blue-100 p-2 rounded">IA64</div>
                    <div className="bg-blue-100 p-2 rounded">ARM</div>
                    <div className="bg-blue-100 p-2 rounded">PowerPC</div>
                    <div className="bg-blue-100 p-2 rounded">SPARC</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-green-800">Microarchitecture</h4>
                <p className="text-sm mb-2">The detailed steps processor takes to execute instructions.</p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded text-sm">
                    <strong>Cache memory:</strong> Reduce access latency, faster data retrieval
                  </div>
                  <div className="bg-white p-2 rounded text-sm">
                    <strong>Pipelining:</strong> Overlap instruction stages, higher throughput
                  </div>
                  <div className="bg-white p-2 rounded text-sm">
                    <strong>Out-of-Order Execution:</strong> Avoid stalls, use resources efficiently
                  </div>
                  <div className="bg-white p-2 rounded text-sm">
                    <strong>Superscalar Issue:</strong> Execute multiple instructions per cycle
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'fetch-decode',
          title: 'Fetch-Decode-Execute Cycle',
          content: (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-3">The CPU Cycle</h4>
                <p className="text-sm mb-4">The fundamental process that repeats continuously while a program runs.</p>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                      <h5 className="font-bold text-blue-600">FETCH</h5>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm space-y-1">
                      <p>• CPU fetches instruction from memory using Program Counter (PC)</p>
                      <p>• Instruction loaded into Instruction Register (IR)</p>
                      <p>• Address moves over Address Bus to Memory Access Register</p>
                      <p>• Contents move from memory to IR via Data Bus</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                      <h5 className="font-bold text-green-600">DECODE</h5>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm space-y-1">
                      <p>• Control Unit decodes the instruction</p>
                      <p>• Determines what operation needs to be done</p>
                      <p>• Generates control signals</p>
                      <p>• Prepares ALU and registers</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                      <h5 className="font-bold text-purple-600">EXECUTE</h5>
                    </div>
                    <div className="bg-purple-50 p-3 rounded text-sm space-y-1">
                      <p>• Instruction is executed</p>
                      <p>• ALU performs calculations or logical operations</p>
                      <p>• Data moves between registers, memory, and I/O</p>
                      <p>• Program Counter updated to next instruction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm font-semibold">⚡ This cycle repeats millions/billions of times per second!</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'hardware',
      title: 'Hardware Design',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'bg-red-500',
      subsections: [
        {
          id: 'components',
          title: 'System Components',
          content: (
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold mb-2">Hardware Design</h4>
                <p className="text-sm">Integrating and organizing all physical components for a microprocessor system to function reliably and efficiently.</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold mb-2">Core Components:</h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-100 p-2 rounded">
                      <strong>Microprocessor:</strong> Executes instructions and controls overall operation
                    </div>
                    <div className="bg-green-100 p-2 rounded">
                      <strong>ROM:</strong> Stores permanent firmware or boot instructions
                    </div>
                    <div className="bg-yellow-100 p-2 rounded">
                      <strong>RAM:</strong> Holds temporary data and program instructions
                    </div>
                    <div className="bg-purple-100 p-2 rounded">
                      <strong>Cache:</strong> Optional fast memory for quick data access
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold mb-2">I/O Interfaces:</h5>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="mb-2">Enable communication between microprocessor and external devices</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-100 p-2 rounded">
                        <strong>Input:</strong> Keyboards, sensors
                      </div>
                      <div className="bg-orange-100 p-2 rounded">
                        <strong>Output:</strong> Displays, LEDs, actuators
                      </div>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="bg-white p-2 rounded"><strong>UART:</strong> Asynchronous serial communication</div>
                      <div className="bg-white p-2 rounded"><strong>SPI:</strong> Synchronous serial with clock line</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold mb-2">Peripheral Controllers:</h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-100 p-2 rounded">
                      <strong>Timers:</strong> Provide precise timing control and delays
                    </div>
                    <div className="bg-pink-100 p-2 rounded">
                      <strong>Interrupt Controllers:</strong> Manage and prioritize interrupt requests
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold mb-2">PCB Design:</h5>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="mb-2">Determines physical layout and interconnections</p>
                    <p>• Signal integrity and noise reduction</p>
                    <p>• Compact, reliable routing</p>
                    <p>• Layer stacking for complex designs</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'software',
      title: 'Software & Programming',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-teal-500',
      subsections: [
        {
          id: 'languages',
          title: 'Programming Languages',
          content: (
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <h4 className="font-bold mb-2">Three Levels of Programming</h4>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-gray-800">
                  <h5 className="font-bold text-lg mb-2">Machine Language (ML)</h5>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                    10110000 01100001
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p>• Only language understood by microprocessor</p>
                    <p>• Instructions in binary form (0s and 1s)</p>
                    <p>• Directly executable by CPU</p>
                    <p>• Very difficult for humans to read/write</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
                  <h5 className="font-bold text-lg mb-2">Assembly Language (AL)</h5>
                  <div className="bg-gray-900 text-yellow-400 p-3 rounded font-mono text-sm mb-2">
                    MOV AX, 5<br/>
                    ADD AX, BX<br/>
                    CMP AX, 10
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p>• Uses mnemonics (alphanumeric symbols)</p>
                    <p>• Easier for humans to understand than machine code</p>
                    <p>• Must be translated to machine language by <strong>Assembler</strong></p>
                    <p>• Still low-level and processor-specific</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
                  <h5 className="font-bold text-lg mb-2">High-Level Language (HLL)</h5>
                  <div className="bg-gray-900 text-blue-400 p-3 rounded font-mono text-sm mb-2">
                    int sum = a + b;<br/>
                    if (sum {'>'} 10) {'{'}<br/>
                    &nbsp;&nbsp;printf("Greater");<br/>
                    {'}'}
                  </div>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p>• Examples: C, C++, Java, Python, FORTRAN, Pascal</p>
                    <p>• Closer to human language</p>
                    <p>• Independent of specific processor type</p>
                    <p>• Must be translated to machine code by <strong>Compiler</strong></p>
                    <p>• Easier to write and maintain</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-lg">
                <h5 className="font-bold mb-2">Translation Flow:</h5>
                <div className="flex items-center justify-around text-sm">
                  <div className="text-center">
                    <div className="bg-purple-600 px-3 py-2 rounded">High-Level</div>
                    <div className="text-xs mt-1">(C, Java)</div>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="bg-blue-600 px-3 py-2 rounded">Assembly</div>
                    <div className="text-xs mt-1">(MOV, ADD)</div>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="bg-gray-600 px-3 py-2 rounded">Machine</div>
                    <div className="text-xs mt-1">(Binary)</div>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'tools',
          title: 'Software Tools',
          content: (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-lg mb-2 text-blue-600">Editor</h5>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="mb-2">Used for writing and editing source code</p>
                    <p className="mb-2">Supports text-based program creation</p>
                    <p className="font-semibold">Examples:</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      <span className="bg-blue-200 px-2 py-1 rounded text-xs">Notepad++</span>
                      <span className="bg-blue-200 px-2 py-1 rounded text-xs">Visual Studio Code</span>
                      <span className="bg-blue-200 px-2 py-1 rounded text-xs">Keil uVision</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-lg mb-2 text-green-600">Compiler</h5>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="mb-2">Translates High-Level Language (HLL) → Machine Language (ML)</p>
                    <p className="mb-2"><strong>Input:</strong> Source code (C, C++, Java)</p>
                    <p className="mb-2"><strong>Output:</strong> Object files or executable binaries</p>
                    <p className="text-xs bg-white p-2 rounded mt-2">Example: gcc compiler.c -o program.exe</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-lg mb-2 text-purple-600">Assembler</h5>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="mb-2">Translates Assembly Language (AL) → Machine Language (ML)</p>
                    <p className="mb-2">Provides symbolic coding (mnemonics) for easier understanding</p>
                    <p className="mb-2"><strong>Output:</strong> Object code or executable machine code</p>
                    <p className="text-xs bg-white p-2 rounded mt-2">Example: nasm program.asm -o program.bin</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-lg mb-2 text-orange-600">System Monitor</h5>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="mb-2">Monitoring memory and register contents</p>
                    <p className="mb-2">Entering or modifying machine language programs directly (often in hexadecimal)</p>
                    <p className="mb-2">Useful for debugging and testing embedded systems</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'plds',
      title: 'Programmable Logic Devices',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-pink-500',
      subsections: [
        {
          id: 'pld-intro',
          title: 'Introduction to PLDs',
          content: (
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-bold mb-2">What are PLDs?</h4>
                <p className="text-sm">Programmable Logic Devices are integrated circuits designed to be configured by the user to perform specific logic functions.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2 text-red-600">Problems with Standard ICs:</h5>
                <div className="bg-red-50 p-3 rounded text-sm space-y-1">
                  <p>❌ Require hundreds or thousands of ICs</p>
                  <p>❌ Require large board space</p>
                  <p>❌ Large amount of time and cost in inserting, soldering, testing</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2 text-green-600">Advantages of PLDs:</h5>
                <div className="bg-green-50 p-3 rounded text-sm space-y-1">
                  <p>✓ Reduce need for multiple discrete ICs</p>
                  <p>✓ Lower design and manufacturing costs</p>
                  <p>✓ Faster prototyping and time-to-market</p>
                  <p>✓ Reconfigurable for future updates or bug fixes</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
                <h5 className="font-bold mb-3">Types of PLDs:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded shadow text-sm">
                    <div className="font-bold text-blue-600">PROM</div>
                    <div className="text-xs">Programmable Read-Only Memory</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-sm">
                    <div className="font-bold text-green-600">PLA</div>
                    <div className="text-xs">Programmable Logic Array</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-sm">
                    <div className="font-bold text-purple-600">PAL</div>
                    <div className="text-xs">Programmable Array Logic</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-sm">
                    <div className="font-bold text-orange-600">CPLD</div>
                    <div className="text-xs">Complex Programmable Logic Device</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-sm col-span-1 md:col-span-2">
                    <div className="font-bold text-red-600">FPGA</div>
                    <div className="text-xs">Field-Programmable Gate Array</div>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'prom',
          title: 'PROM',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-blue-600">PROM (Programmable Read-Only Memory)</h4>
                <div className="bg-blue-50 p-4 rounded space-y-2 text-sm">
                  <p>• Memory device programmed <strong>once</strong> after manufacturing</p>
                  <p>• Contains <strong>fixed AND array</strong> and <strong>programmable OR array</strong></p>
                  <p>• Used to store fixed data or implement logic functions in sum of min-terms form</p>
                  <p>• Once programmed (by burning fuses), data <strong>cannot be changed</strong></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Structure:</h5>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-center space-y-2">
                    <div className="bg-blue-300 p-3 rounded font-bold">INPUTS</div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-green-300 p-3 rounded">
                      <div className="font-bold">Fixed AND Array</div>
                      <div className="text-xs">(Decoder - not programmable)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-yellow-300 p-3 rounded">
                      <div className="font-bold">Programmable OR Array</div>
                      <div className="text-xs">(User can program)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-purple-300 p-3 rounded font-bold">OUTPUTS</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Applications:</h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-indigo-100 p-2 rounded">• Fixed logic functions (decoders, code converters)</div>
                  <div className="bg-indigo-100 p-2 rounded">• Lookup tables</div>
                  <div className="bg-indigo-100 p-2 rounded">• Storing permanent data</div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h5 className="font-bold mb-2">Understanding Σm(...) Notation:</h5>
                <div className="text-sm space-y-2">
                  <p><strong>Σm(...)</strong> = Sum of min-terms</p>
                  <p>Each min-term corresponds to a row where output = 1</p>
                  <p className="bg-white p-2 rounded mt-2">
                    <strong>Example:</strong> B₂ = Σm(2, 6)<br/>
                    Means B₂ = 1 when input is 2 OR 6, otherwise B₂ = 0
                  </p>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'pla',
          title: 'PLA',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-green-600">PLA (Programmable Logic Array)</h4>
                <div className="bg-green-50 p-4 rounded space-y-2 text-sm">
                  <p>• Device with <strong>programmable AND</strong> and <strong>programmable OR</strong> arrays</p>
                  <p>• <strong>More flexible</strong> than PROM</p>
                  <p>• Allows optimization of logic functions</p>
                  <p>• Both AND array (generating product terms) and OR array (summing product terms) can be programmed</p>
                  <p>• Any logical expression can be implemented as sum of products</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Structure:</h5>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-center space-y-2">
                    <div className="bg-blue-300 p-3 rounded font-bold">INPUTS</div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-yellow-300 p-3 rounded">
                      <div className="font-bold">Programmable AND Array</div>
                      <div className="text-xs">(User programs product terms)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-yellow-300 p-3 rounded">
                      <div className="font-bold">Programmable OR Array</div>
                      <div className="text-xs">(User programs sums)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-purple-300 p-3 rounded font-bold">OUTPUTS</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2 text-green-700">Advantages:</h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-100 p-2 rounded">✓ Reduced number of logic gates needed</div>
                  <div className="bg-green-100 p-2 rounded">✓ More efficient designs</div>
                  <div className="bg-green-100 p-2 rounded">✓ Can optimize logic expressions</div>
                  <div className="bg-green-100 p-2 rounded">✓ Maximum flexibility in programming</div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'pal',
          title: 'PAL',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-purple-600">PAL (Programmable Array Logic)</h4>
                <div className="bg-purple-50 p-4 rounded space-y-2 text-sm">
                  <p>• Similar to PLA, but <strong>simpler</strong></p>
                  <p>• Has <strong>programmable AND array</strong> and <strong>fixed OR array</strong></p>
                  <p>• Logic functions generated by programming AND array</p>
                  <p>• OR array combines selected product terms in a fixed way</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Structure:</h5>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-center space-y-2">
                    <div className="bg-blue-300 p-3 rounded font-bold">INPUTS</div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-yellow-300 p-3 rounded">
                      <div className="font-bold">Programmable AND Array</div>
                      <div className="text-xs">(User can program)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-green-300 p-3 rounded">
                      <div className="font-bold">Fixed OR Array</div>
                      <div className="text-xs">(Not programmable)</div>
                    </div>
                    <div className="text-2xl">↓</div>
                    <div className="bg-purple-300 p-3 rounded font-bold">OUTPUTS</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2 text-purple-700">Advantages:</h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-purple-100 p-2 rounded">✓ Faster than PLA</div>
                  <div className="bg-purple-100 p-2 rounded">✓ Easier to program</div>
                  <div className="bg-purple-100 p-2 rounded">✓ Lower cost</div>
                  <div className="bg-purple-100 p-2 rounded">✓ Simpler structure</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-bold mb-2">Quick Comparison:</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-300">
                      <tr>
                        <th className="p-2">Device</th>
                        <th className="p-2">AND Array</th>
                        <th className="p-2">OR Array</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-bold">PROM</td>
                        <td className="p-2 bg-red-100">Fixed</td>
                        <td className="p-2 bg-green-100">Programmable</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-bold">PLA</td>
                        <td className="p-2 bg-green-100">Programmable</td>
                        <td className="p-2 bg-green-100">Programmable</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold">PAL</td>
                        <td className="p-2 bg-green-100">Programmable</td>
                        <td className="p-2 bg-red-100">Fixed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'cpld',
          title: 'CPLD',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-orange-600">CPLD (Complex Programmable Logic Device)</h4>
                <div className="bg-orange-50 p-4 rounded space-y-2 text-sm">
                  <p>• Collection of <strong>multiple PAL-like blocks</strong> integrated on a single chip</p>
                  <p>• Contains programmable interconnect structure to connect logic blocks</p>
                  <p>• Each block (macro cell) can implement logic functions</p>
                  <p>• Blocks interconnected via programmable routing</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Features:</h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-100 p-2 rounded">• <strong>Non-volatile memory</strong> (EEPROM/flash) - retains logic after power-off</div>
                  <div className="bg-blue-100 p-2 rounded">• Supports medium to large complexity logic designs</div>
                  <div className="bg-blue-100 p-2 rounded">• Faster than FPGAs for some applications</div>
                  <div className="bg-blue-100 p-2 rounded">• Predictable timing</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2">Applications:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="bg-green-100 p-2 rounded">Address decoding</div>
                  <div className="bg-green-100 p-2 rounded">Glue logic</div>
                  <div className="bg-green-100 p-2 rounded">Finite state machines</div>
                  <div className="bg-green-100 p-2 rounded">Bus interfaces</div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'fpga',
          title: 'FPGA',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-red-600">FPGA (Field-Programmable Gate Array)</h4>
                <div className="bg-red-50 p-4 rounded space-y-2 text-sm">
                  <p>• <strong>Most powerful and flexible</strong> type of PLD</p>
                  <p>• Composed of array of <strong>Configurable Logic Blocks (CLBs)</strong> or Logic Elements (LEs)</p>
                  <p>• Has programmable interconnects</p>
                  <p>• Uses <strong>Look-Up Tables (LUTs)</strong> to implement logic functions</p>
                  <p>• Supports extremely complex logic and high-speed designs</p>
                  <p>• Can be <strong>reprogrammed multiple times</strong></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-bold mb-2 text-red-700">Key Features:</h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-100 p-2 rounded">✓ Highest flexibility and capacity</div>
                  <div className="bg-red-100 p-2 rounded">✓ Complex logic implementation</div>
                  <div className="bg-red-100 p-2 rounded">✓ Reconfigurable architecture</div>
                  <div className="bg-red-100 p-2 rounded">✓ Ideal for prototyping ASICs</div>
                  <div className="bg-red-100 p-2 rounded">✓ High-speed signal processing</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg">
                <h5 className="font-bold mb-3">CPLD vs FPGA:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-orange-600 mb-2">CPLD</div>
                    <div className="space-y-1 text-xs">
                      <p>• PAL-like blocks</p>
                      <p>• Non-volatile</p>
                      <p>• Faster for simple logic</p>
                      <p>• Lower capacity</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <div className="font-bold text-red-600 mb-2">FPGA</div>
                    <div className="space-y-1 text-xs">
                      <p>• LUT-based CLBs</p>
                      <p>• Usually volatile (SRAM)</p>
                      <p>• Best for complex logic</p>
                      <p>• Higher capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'components',
          title: 'PLD Components',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-indigo-600">Basic Cells</h4>
                <div className="bg-indigo-50 p-4 rounded space-y-2 text-sm">
                  <p className="font-semibold">Fundamental logic units within a PLD</p>
                  <p>• Smallest functional blocks</p>
                  <p>• Perform core logic operations: AND, OR, NOT</p>
                  <p>• Can be interconnected for complex logic</p>
                </div>
                <div className="mt-3 bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold mb-2">Typically include:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded">Multiplexers (MUXes)</div>
                    <div className="bg-white p-2 rounded">Lookup Tables (LUTs)</div>
                    <div className="bg-white p-2 rounded">Flip-flops</div>
                    <div className="bg-white p-2 rounded">Logic gates</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-purple-600">Macro Cells</h4>
                <div className="bg-purple-50 p-4 rounded space-y-2 text-sm">
                  <p className="font-semibold">Built from multiple basic cells</p>
                  <p>• Capable of more complex functions</p>
                  <p>• Common in CPLDs and FPGAs</p>
                </div>
                <div className="mt-3 bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold mb-2">Typical components:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded">• Combinational logic (AND/OR gates)</div>
                    <div className="bg-white p-2 rounded">• Flip-flops for storage</div>
                    <div className="bg-white p-2 rounded">• Multiplexers</div>
                    <div className="bg-white p-2 rounded">• Feedback paths for sequential logic</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-green-600">Flip-Flops</h4>
                <div className="bg-green-50 p-4 rounded space-y-2 text-sm">
                  <p>• Circuit that maintains a state until directed by input to change</p>
                  <p>• Can be constructed using four-NAND or four-NOR gates</p>
                  <p>• A <strong>bistable multivibrator</strong> (two stable states)</p>
                </div>
                <div className="mt-3 bg-gray-100 p-3 rounded">
                  <p className="font-semibold mb-2 text-sm">Types of Flip-Flops:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-blue-100 p-2 rounded">SR Flip Flop</div>
                    <div className="bg-green-100 p-2 rounded">JK Flip Flop</div>
                    <div className="bg-yellow-100 p-2 rounded">D Flip Flop</div>
                    <div className="bg-purple-100 p-2 rounded">T Flip Flop</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-orange-600">Multiplexers (MUX)</h4>
                <div className="bg-orange-50 p-4 rounded text-sm">
                  <p>• Combinational circuit with <strong>many data inputs</strong> and a <strong>single output</strong></p>
                  <p className="mt-2">• Output depends on control or select inputs</p>
                  <p className="mt-2">• Acts like a digital switch</p>
                </div>
                <div className="mt-3 bg-gray-900 text-white p-3 rounded text-sm font-mono">
                  Select = 00 → Output = Input0<br/>
                  Select = 01 → Output = Input1<br/>
                  Select = 10 → Output = Input2<br/>
                  Select = 11 → Output = Input3
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-teal-600">Registers</h4>
                <div className="bg-teal-50 p-4 rounded space-y-2 text-sm">
                  <p className="font-semibold">Groups of flip-flops used to temporarily store binary data</p>
                  <p>• Each flip-flop stores one bit</p>
                  <p>• Collectively store multi-bit values</p>
                </div>
                <div className="mt-3 bg-gray-100 p-3 rounded text-sm">
                  <p className="font-semibold mb-2">Functions:</p>
                  <div className="space-y-1">
                    <p>• Hold intermediate results</p>
                    <p>• Implement counters and shift registers</p>
                    <p>• Store states in finite state machines</p>
                    <p>• Essential for sequential circuits</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'programming',
          title: 'PLD Programming',
          content: (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2">Principle of Operation</h4>
                <div className="bg-gray-50 p-4 rounded space-y-3 text-sm">
                  <p>• PLDs consist of arrays of programmable logic elements and interconnects</p>
                  <p>• Programmed using design files created via <strong>HDL</strong> (Hardware Description Language)</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-blue-600">HDL (Hardware Description Language)</h4>
                <div className="bg-blue-50 p-4 rounded space-y-2 text-sm">
                  <p>Specialized programming language used to describe the structure, design, and behavior of digital circuits</p>
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-purple-100 p-3 rounded text-sm">
                    <h5 className="font-bold mb-2">VHDL</h5>
                    <p className="text-xs">VHSIC Hardware Description Language</p>
                    <p className="text-xs mt-1">• Strongly typed and verbose</p>
                    <p className="text-xs">• Suitable for large, complex designs</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-sm">
                    <h5 className="font-bold mb-2">Verilog</h5>
                    <p className="text-xs mt-1">• More concise and similar to C</p>
                    <p className="text-xs">• Widely used in industry</p>
                    <p className="text-xs">• For synthesis and simulation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2">Programming Technologies</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded text-sm">
                    <h5 className="font-bold text-red-700">Fuse/Antifuse</h5>
                    <p>• Permanent connections</p>
                    <p>• One-time programmable</p>
                    <p>• Cannot be changed after programming</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded text-sm">
                    <h5 className="font-bold text-yellow-700">EPROM/EEPROM</h5>
                    <p>• Can be erased and reprogrammed</p>
                    <p>• EPROM: Erased with UV light</p>
                    <p>• EEPROM: Electrically erasable</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <h5 className="font-bold text-green-700">Flash Memory</h5>
                    <p>• Electrically reprogrammable</p>
                    <p>• Widely used today</p>
                    <p>• Fast and reliable</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'applications',
          title: 'PLD Applications',
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-blue-600 mb-2">Embedded System Controllers</h5>
                  <p className="text-sm">PLDs act as central control units in embedded applications</p>
                  <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                    Used in: Automotive systems, Robotics, Medical devices
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-green-600 mb-2">Custom Logic Design</h5>
                  <p className="text-sm">Quickly implement and test digital logic without custom IC fabrication</p>
                  <div className="mt-2 text-xs bg-green-50 p-2 rounded">
                    Used in: R&D labs, Prototyping, Design verification
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-purple-600 mb-2">Glue Logic</h5>
                  <p className="text-sm">Acts as interface logic between incompatible subsystems or ICs</p>
                  <div className="mt-2 text-xs bg-purple-50 p-2 rounded">
                    Adapts signals, timing, and protocols between devices
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-orange-600 mb-2">State Machines & Control</h5>
                  <p className="text-sm">Ideal for implementing Finite State Machines (FSMs)</p>
                  <div className="mt-2 text-xs bg-orange-50 p-2 rounded">
                    Common in control flow design, protocol handling
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-red-600 mb-2">ASIC Prototyping</h5>
                  <p className="text-sm">PLDs (especially FPGAs) used to prototype ASICs before final manufacturing</p>
                  <div className="mt-2 text-xs bg-red-50 p-2 rounded">
                    Reduces design risks and development time
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-teal-600 mb-2">Industrial Automation</h5>
                  <p className="text-sm">Used in sensor interfaces, motor control, timing circuits</p>
                  <div className="mt-2 text-xs bg-teal-50 p-2 rounded">
                    Programmable Logic Controllers (PLCs)
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
                  <h5 className="font-bold text-indigo-600 mb-2">Consumer Electronics</h5>
                  <p className="text-sm">Found in smart TVs, set-top boxes, cameras, gaming consoles for handling custom logic</p>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'memory-chips',
          title: 'Memory Chip Types',
          content: (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Different Types of Memory Chips</h4>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-blue-600">RAM (Random Access Memory)</h5>
                  <div className="bg-blue-50 p-3 rounded text-sm mt-2">
                    <p>• <strong>Volatile</strong> memory</p>
                    <p>• Used temporarily during operation</p>
                    <p>• Loses data when power is off</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-green-600">ROM (Read-Only Memory)</h5>
                  <div className="bg-green-50 p-3 rounded text-sm mt-2">
                    <p>• <strong>Non-volatile</strong> memory</p>
                    <p>• Used for storing firmware or fixed data</p>
                    <p>• Retains data when power is off</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-purple-600">EPROM (Erasable Programmable ROM)</h5>
                  <div className="bg-purple-50 p-3 rounded text-sm mt-2">
                    <p>• Can be erased using <strong>ultraviolet light</strong></p>
                    <p>• Can be reprogrammed</p>
                    <p>• Has a quartz window on top for UV exposure</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-orange-600">EEPROM (Electrically Erasable Programmable ROM)</h5>
                  <div className="bg-orange-50 p-3 rounded text-sm mt-2">
                    <p>• Can be <strong>electrically</strong> erased and reprogrammed</p>
                    <p>• No need for UV light</p>
                    <p>• More convenient than EPROM</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <h5 className="font-bold text-red-600">Flash Memory</h5>
                  <div className="bg-red-50 p-3 rounded text-sm mt-2">
                    <p>• Modern <strong>non-volatile</strong> memory</p>
                    <p>• Used for storing configuration data in CPLDs and FPGAs</p>
                    <p>• Fast, reliable, and widely used</p>
                    <p>• Examples: USB drives, SSDs, memory cards</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-bold mb-3">Quick Comparison:</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-300">
                      <tr>
                        <th className="p-2">Type</th>
                        <th className="p-2">Volatile?</th>
                        <th className="p-2">Erasable?</th>
                        <th className="p-2">Reprogrammable?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-bold">RAM</td>
                        <td className="p-2 bg-red-100">Yes</td>
                        <td className="p-2">N/A</td>
                        <td className="p-2 bg-green-100">Yes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-bold">ROM</td>
                        <td className="p-2 bg-green-100">No</td>
                        <td className="p-2 bg-red-100">No</td>
                        <td className="p-2 bg-red-100">No</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-bold">EPROM</td>
                        <td className="p-2 bg-green-100">No</td>
                        <td className="p-2 bg-green-100">Yes (UV)</td>
                        <td className="p-2 bg-green-100">Yes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-bold">EEPROM</td>
                        <td className="p-2 bg-green-100">No</td>
                        <td className="p-2 bg-green-100">Yes (Electric)</td>
                        <td className="p-2 bg-green-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold">Flash</td>
                        <td className="p-2 bg-green-100">No</td>
                        <td className="p-2 bg-green-100">Yes (Electric)</td>
                        <td className="p-2 bg-green-100">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
      setActiveSubsection(null);
    } else {
      setActiveSection(sectionId);
      setActiveSubsection(sections.find(s => s.id === sectionId)?.subsections[0]?.id || null);
    }
  };

  const currentSection = sections.find(s => s.id === activeSection);
  const currentSubsection = currentSection?.subsections.find(s => s.id === activeSubsection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-6 shadow-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Computer Interfacing & Microprocessors</h1>
        <p className="text-sm sm:text-base text-indigo-100">Complete Exam Study Guide - Learn Every Concept</p>
        <div className="mt-3 sm:mt-4 bg-white/20 backdrop-blur p-2 sm:p-3 rounded-lg">
          <p className="text-xs sm:text-sm">📚 This guide covers all topics from your course material</p>
          <p className="text-xs sm:text-sm">💡 Click on any section to expand and learn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {!activeSection ? (
          /* Main Menu */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className={`${section.color} active:opacity-80 hover:opacity-90 text-white p-4 sm:p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 touch-manipulation`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-left">{section.title}</h2>
                </div>
                <p className="text-xs sm:text-sm text-white/90 text-left">
                  {section.subsections.length} topics to learn
                </p>
              </button>
            ))}
          </div>
        ) : currentSection ? (
          /* Section View */
          <div className="space-y-3 sm:space-y-4">
            {/* Back Button */}
            <button
              onClick={() => {
                setActiveSection(null);
                setActiveSubsection(null);
              }}
              className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 text-sm sm:text-base touch-manipulation"
            >
              ← Back to Main Menu
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Sidebar */}
              <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="flex-shrink-0">
                    {currentSection.icon}
                  </div>
                  <span className="truncate">{currentSection.title}</span>
                </h3>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-3 px-3 lg:mx-0 lg:px-0">
                  {currentSection.subsections.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubsection(sub.id)}
                      className={`flex-shrink-0 lg:flex-shrink lg:w-full text-left px-3 py-2 rounded-lg transition-all touch-manipulation ${
                        activeSubsection === sub.id
                          ? `${currentSection.color} text-white`
                          : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-medium whitespace-nowrap lg:whitespace-normal">{sub.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className={`${currentSection.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    {currentSection.icon}
                  </div>
                  <span className="break-words">{currentSubsection?.title}</span>
                </h2>
                <div className="prose prose-sm sm:prose-base max-w-none">
                  {currentSubsection?.content}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white p-4 sm:p-6 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base font-bold mb-2">Good Luck on Your Exam! 🎓</p>
          <p className="text-xs sm:text-sm text-gray-300 px-4">Study each section carefully and make sure you understand the concepts</p>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;
                