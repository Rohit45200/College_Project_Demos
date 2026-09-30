import React from "react";
import { FileText, UserCheck, LockKeyhole, ShieldCheck, RefreshCcw } from "lucide-react";


const TermsOfUse = () => {


    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10">


                {/* Header */}

                <div className="flex items-center gap-3 mb-8">


                    <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">

                        <FileText className="w-6 h-6"/>

                    </div>


                    <div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">

                            Terms of Use

                        </h1>


                        <p className="text-sm text-slate-500 mt-1">

                            SEC Smart Campus Portal

                        </p>


                    </div>


                </div>




                <p className="text-slate-600 leading-relaxed text-lg mb-8">

                    Welcome to SEC Smart Campus Portal. By accessing and
                    using this portal, you agree to follow these terms and
                    conditions for secure and effective usage of campus services.

                </p>





                {/* User Responsibilities */}

                <div className="mb-7 p-5 rounded-2xl bg-slate-50 border border-slate-200">


                    <div className="flex items-center gap-3 mb-3">


                        <UserCheck className="text-indigo-600 w-6 h-6"/>


                        <h2 className="text-xl font-semibold text-slate-900">

                            User Responsibilities

                        </h2>


                    </div>



                    <p className="text-slate-600 leading-relaxed">

                        Students, faculty members and administrators must
                        provide accurate information and use the portal only
                        for authorized academic purposes.

                    </p>


                </div>





                {/* Account Security */}

                <div className="mb-7 p-5 rounded-2xl bg-slate-50 border border-slate-200">


                    <div className="flex items-center gap-3 mb-3">


                        <LockKeyhole className="text-indigo-600 w-6 h-6"/>


                        <h2 className="text-xl font-semibold text-slate-900">

                            Account Security

                        </h2>


                    </div>



                    <p className="text-slate-600 leading-relaxed">

                        Users are responsible for maintaining the
                        confidentiality of their login credentials.
                        Any unauthorized account activity should be reported
                        immediately.

                    </p>


                </div>





                {/* Portal Usage */}

                <div className="mb-7 p-5 rounded-2xl bg-slate-50 border border-slate-200">


                    <div className="flex items-center gap-3 mb-3">


                        <ShieldCheck className="text-indigo-600 w-6 h-6"/>


                        <h2 className="text-xl font-semibold text-slate-900">

                            Portal Usage

                        </h2>


                    </div>



                    <p className="text-slate-600 leading-relaxed">

                        The portal provides services including attendance,
                        schedules, notices, academic records and other
                        campus-related information.

                    </p>


                </div>





                {/* Changes to Terms */}

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">


                    <div className="flex items-center gap-3 mb-3">


                        <RefreshCcw className="text-indigo-600 w-6 h-6"/>


                        <h2 className="text-xl font-semibold text-slate-900">

                            Changes to Terms

                        </h2>


                    </div>



                    <p className="text-slate-600 leading-relaxed">

                        Sengunthar Engineering College reserves the right
                        to update these terms whenever required to improve
                        security and portal services.

                    </p>


                </div>




            </div>


        </div>

    );

};


export default TermsOfUse;