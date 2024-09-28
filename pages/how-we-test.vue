<template>
    <div class="container mx-auto px-4 py-16 max-w-3xl">
        <h1 class="text-4xl font-bold mb-8 text-center text-white">How We Test</h1>

        <div class="space-y-8 text-gray-300">
            <section>
                <h2 class="text-2xl font-semibold mb-4 text-white">Our Commitment to Quality</h2>
                <p class="leading-relaxed">
                    At devdorne, we understand the importance of reliable and effective developer tools. We take our
                    testing process seriously, ensuring that every tool in our catalog meets high standards of quality
                    and functionality.
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold mb-4 text-white">Our Testing Process</h2>
                <ul class="list-disc list-inside space-y-2">
                    <li>Hands-on testing by our expert team</li>
                    <li>Verification of all advertised features</li>
                    <li>Performance and stability assessments</li>
                    <li>User experience evaluation</li>
                    <li>Compatibility checks across different environments</li>
                </ul>
            </section>

            <section>
                <h2 class="text-2xl font-semibold mb-4 text-white">Transparency</h2>
                <p class="leading-relaxed">
                    We believe in full transparency. If a feature is not available or doesn't work as expected, we
                    communicate this clearly in our reviews. Our goal is to provide accurate and up-to-date information
                    to help you make informed decisions.
                </p>
            </section>

            <section>
                <h2 class="text-2xl font-semibold mb-4 text-white">Continuous Updates</h2>
                <p class="leading-relaxed">
                    The world of developer tools is constantly evolving. We regularly revisit and update our reviews to
                    ensure they reflect the latest versions and features of each tool.
                </p>
            </section>

            <section class="bg-gray-800 rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-white">Your Feedback Matters</h2>
                <p class="leading-relaxed mb-4">
                    We value the insights of our community. If you have experience with a tool in our catalog or notice
                    any discrepancies in our reviews, we encourage you to reach out.
                </p>
                <AppButton to="/submit-tool" primary class="w-full md:w-auto">
                    Submit Feedback
                </AppButton>
            </section>
        </div>
    </div>
</template>