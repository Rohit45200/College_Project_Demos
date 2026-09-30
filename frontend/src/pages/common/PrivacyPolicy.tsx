import React from "react";
import { ShieldCheck, Lock, Database, Mail } from "lucide-react";


const PrivacyPolicy = () => {

    return (

        <div className="min-h-screen bg-slate-50 py-10 px-4">


            <div className="max-w-5xl mx-auto">


                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">


                    {/* Header */}

                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">


                        <div className="flex items-center gap-3">


                            <div className="bg-white/20 p-3 rounded-xl">

                                <ShieldCheck className="w-8 h-8" />

                            </div>


                            <div>

                                <h1 className="text-4xl font-bold">
                                    Privacy Policy
                                </h1>

                                <p className="mt-2 text-indigo-100">
                                    SEC Smart Campus Portal
                                </p>

                            </div>


                        </div>


                    </div>





                    {/* Content */}

                    <div className="p-8 space-y-8">



                        <p className="text-slate-600 leading-relaxed text-lg">

                            SEC Smart Campus Portal respects your privacy and
                            protects your personal information. This privacy
                            policy explains how we collect, use and protect
                            student and faculty information.

                        </p>





                        {/* Information Collection */}

                        <div className="flex gap-4">


                            <div className="bg-indigo-100 p-3 rounded-xl h-fit">

                                <Database className="text-indigo-600"/>

                            </div>


                            <div>

                                <h2 className="text-2xl font-semibold text-slate-800 mb-2">

                                    Information Collection

                                </h2>


                                <p className="text-slate-600 leading-relaxed">

                                    We collect student, faculty and academic
                                    information required for providing campus
                                    services such as attendance, results,
                                    notices, assignments and schedules.

                                </p>

                            </div>


                        </div>







                        {/* Data Security */}

                        <div className="flex gap-4">


                            <div className="bg-green-100 p-3 rounded-xl h-fit">

                                <Lock className="text-green-600"/>

                            </div>


                            <div>

                                <h2 className="text-2xl font-semibold text-slate-800 mb-2">

                                    Data Security

                                </h2>


                                <p className="text-slate-600 leading-relaxed">

                                    We implement appropriate security measures
                                    to protect user information from
                                    unauthorized access, misuse or disclosure.

                                </p>


                            </div>


                        </div>







                        {/* Contact */}

                        <div className="flex gap-4">


                            <div className="bg-blue-100 p-3 rounded-xl h-fit">

                                <Mail className="text-blue-600"/>

                            </div>


                            <div>


                                <h2 className="text-2xl font-semibold text-slate-800 mb-2">

                                    Contact

                                </h2>


                                <p className="text-slate-600 leading-relaxed">

                                    For any privacy related queries, contact
                                    Sengunthar Engineering College administration.

                                </p>


                            </div>


                        </div>




                    </div>




                    {/* Footer */}

                    <div className="bg-slate-50 border-t p-5 text-center">


                        <p className="text-sm text-slate-500">

                            © 2026 SEC Smart Campus Portal. All rights reserved.

                        </p>


                    </div>



                </div>


            </div>


        </div>

    );

};


export default PrivacyPolicy;